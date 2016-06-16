

# Experimenting With typescript (simulating discriminated unions including exhaustive match)

Discriminated unions are well known from more functional languages like haskel, ML, F#
You can think of them as enums on steroids, typesafe way of expresing various exclusive options.
(look how f# does it: https://fsharpforfunandprofit.com/posts/discriminated-unions/)
When matching against discriminated union, compiler can check if your match is exhaustive,
ie if you have handled all possible cases.

Typescript extends javascript with types but they are compile time only and stripped away once the program runs.
Javascript have very limited capability to check expression type in runtime. If we choose classes for representing the unions,
we can use `Object instanceof UnionClass`, typescript supports this and narrows the type if in condition (as well as for `typeof x === "string"` types of checks)

```ts
class A {
  test: string
};
function testA(a: A | number){
  if(a instanceof A){
    a.test; // correctly string
  } else {
    a; // correctly number
  }
}
```

Sometimes you do not want to express union this way, for example when working with plain objects from json api response.

In this case we can help typescript and define type-checking function this way:

```ts
interface B { test: number }
function isB(b: any): b is B {
  return b.test != null;
}

function testB(b: B | number){
  if(isB(b)){
    b.test; // correctly number
  }
}
```

Next version of typescript will support type narrowing on property check (https://github.com/Microsoft/TypeScript/issues/186), but for now this is only way to do it.

Typescript has also very nice feature of literal types, i.e. you can express concrete string value in the type system, p.e.:

```ts
var test: 'A' | 'B' | 'C';
test = 'A' // correct
//test = 'E' // error
```

With this we can define type for plain object with "type" attribute.

```ts
interface TypeLabel<TIdentifier>{
  type: TIdentifier
}
type LabeledType<TIdentifier, TParams> = TParams & TypeLabel<TIdentifier>;

// example usage
type Dog = LabeledType<'DOG',{ name: string }>;
var dog: Dog;
dog = { type: 'DOG', name: 'Borek' } // correct
//dog = { type: 'CAT', name: 'Micka' } // error

```
 And we can abstract even more and define completely generic type descriptor, it can by either class itself or object with match method

```ts
type ClassType<T> = new (...a) => T;
interface TypeMatcher<T>{
  match(type: any): type is T
}
type TypeDescriptor<T> = TypeMatcher<T> | ClassType<T>
```

And we can match on any TypeDescriptor like this:

```ts
function matchType<T>(type: TypeDescriptor<T>, value: any): value is T {
  if(typeof type === "function") { // class constructor
    return value instanceof <any>type;
  }
  return (type as TypeMatcher<T>).match(value);
}
```

Lets get back to plain js object, this is how we can implement helper to match on them and create them:
```ts
interface LabeledTypeDescriptor<TParams, TIdentifier> extends TypeMatcher<LabeledType<TIdentifier, TParams>>{
  identifier: string
  type: LabeledType<TIdentifier, TParams> // safe type of other type attributes to be able to use it later

  create(data: TParams): LabeledType<TIdentifier, TParams>
  match(type: any): type is LabeledType<TIdentifier, TParams>
}

function createTypeDescriptor<TParams, TIDentifier extends string>(identifier: TIDentifier){
  return <LabeledTypeDescriptor<TParams, TIDentifier>>{
    create(data: TParams): LabeledType<TIDentifier, TParams>
    {
      var obj = data as LabeledType<TIDentifier, TParams>
      obj.type = identifier;
      return obj;
    },
    match(value: any): value is LabeledType<TIDentifier, TParams>{
      return value.type === identifier;
    }
  }
}
```

Example usage:

```ts

var dogKind = createTypeDescriptor<{ name: string}, 'DOG'>('DOG')
var catKind = createTypeDescriptor<{ numberOfLives: number}, 'CAT'>('CAT')
type Animal = typeof dogKind.type | typeof catKind.type

function testDog(a: Animal){
  if(dogKind.match(a)){
    a.name // correctly defined
  } else {
    a.numberOfLives // correctly number
  }
}
testDog(dogKind.create({ name: 'Borek' })) // parameters is checked to be { name: string }
```


This is still quite verbose and if we don't use else branch the compiler will not error once we add another case to the union
Lets try to find way how to represent the union itself.

This is so far my best try:

```ts
const square = createTypeDescriptor<{ width: number }, 'SQUARE'>('SQUARE');
const rectangle = createTypeDescriptor<{ width: number; height: number }, 'RECTANGLE'>('RECTANGLE');
const circle = createTypeDescriptor<{ radius: number }, 'CIRCLE'>('CIRCLE');
const triangle = createTypeDescriptor<{ a: number, b: number, c: number }, 'TRIANGLE'>('TRIANGLE');
const shapeUnion = union(rectangle, square, circle /* ,triangle */); // uncomment triangle to break the build
type Shape = typeof shapeUnion.type;

function area(s:Shape){
  return shapeUnion.match(s)
    .case(rectangle, _ => _.width * _.height)
    .case(circle, _ =>  Math.pow(_.radius, 2) * Math.PI)
    .case(square, _ =>  Math.pow(_.width, 2))  // try replacing square with triangle to break the build
    .result(); //result
}

const isRound = (s:Shape) => shapeUnion.match(s)
  .case(circle, _ => true)
  .default(_ => false)
  .result(); // boolean

area(rectangle.create({ width: 1, height: 1 }));
area({ type: 'RECTANGLE', width: 1, height: 2 });
```


We might also want to be able to match on classes, lets try to define discriminated union the scala way

```ts
class ContactInformation {
   // we need to give up the strict typing of match method here, make sure you list all types in union
   match = () => union(Email, Phone).match(this as any)
}
class Email extends ContactInformation {
  constructor(public email: string){ super(); }
}
class Phone extends ContactInformation {
  constructor(public telephone: string){ super(); }
}

function getContact(i: ContactInformation){
  return i.match()
    .case(Phone,  p => 'phone' + p.telephone)
    .case(Email, e => 'email' + e.email)
    .result();
}

getContact(new Phone('132456'));
```


So how we describe sutch chaining api to infer all type the way we want it to?
Lets start by defining union, it needs to remember all types in an union in type parameters.
Unfortunately it is not possible to express variable length of type parameters in typescript yet,
so we need to define interface for each number of cases separately

```ts
interface Union<TValue, TMatchable> {
  match(value: TValue): TMatchable // in typescript 1.8 null is considered subtype of any type
  type: TValue  // keep the combined type for convenience
}
interface Union1<T> extends Union<T, FirstMatchable1<T>> {}
interface Union2<T1, T2> extends Union<T1 | T2, FirstMatchable2<T1, T2>> {}
interface Union3<T1, T2, T3> extends Union<T1 | T2 | T3,  FirstMatchable3<T1, T2, T3>> {}
// ... repeat yourself to infinity
```


  Call to .match(x) returns interface which require at least one case (FirstMatchableN)
  This interface for union of n cases is more complicated, it needs to have n methods to mach each individual case,
  and return another interface for matcheble of n-1 cases (MatchableN)

  Once we use case() we can call default() and retrieve result ba result(), if there is no case left.

  We need to pass around return type and widen it on every case so return type of .return() function would be correct.
  This is also reason we need to have two interfaces FirstMatchableN does not have previous result type, MatchableN has it.

```ts
interface FirstMatchable1<T>{
  case<TReturn>(type: TypeDescriptor<T>, action: (v:T) => TReturn): { result(): TReturn}
}
interface FirstMatchable2<T1, T2> {
  case<TReturn>(type: TypeDescriptor<T1>, action:(v:T1) => TReturn): Matchable1<T2, TReturn>
  case<TReturn>(type: TypeDescriptor<T2>, action:(v:T2) => TReturn): Matchable1<T1, TReturn>
}
interface FirstMatchable3<T1, T2, T3> {
  case<TReturn>(type: TypeDescriptor<T1>, action:(v:T1) => TReturn): Matchable2<T2, T3, TReturn>
  case<TReturn>(type: TypeDescriptor<T2>, action:(v:T2) => TReturn): Matchable2<T1, T3, TReturn>
  case<TReturn>(type: TypeDescriptor<T3>, action:(v:T3) => TReturn): Matchable2<T1, T2, TReturn>
}
// ... repeat yourself to infinity

interface Matchable<T, TResult>{
  default<TReturn>(action: (a:T) => TReturn): { result(): TResult | TReturn }
}
interface Matchable1<T, TResult> extends Matchable<T, TResult>{
  case<TReturn>(type: TypeDescriptor<T>, action: (v:T) => TReturn): { result(): TResult | TReturn}
}
interface Matchable2<T1, T2, TResult> extends Matchable<T1 | T2, TResult> {
  case<TReturn>(type: TypeDescriptor<T1>, action:(v:T1) => TReturn): Matchable1<T2, TResult | TReturn>
  case<TReturn>(type: TypeDescriptor<T2>, action:(v:T2) => TReturn): Matchable1<T1, TResult | TReturn>
}
interface Matchable3<T1, T2, T3, TResult>  extends Matchable<T1 | T2 | T3, TResult> {
  case<TReturn>(type: TypeDescriptor<T1>, action:(v:T1) => TReturn): Matchable2<T2, T3, TResult | TReturn>
  case<TReturn>(type: TypeDescriptor<T2>, action:(v:T2) => TReturn): Matchable2<T1, T3, TResult | TReturn>
  case<TReturn>(type: TypeDescriptor<T3>, action:(v:T3) => TReturn): Matchable2<T1, T2, TResult | TReturn>
}
// ... repeat yourself to infinity
```

When we have all types on hand lets implement the real functionality



  union(...a) function needs to return coresponding UnionType, match method just remembers the walue we try to match, and previous results if any.
  Notice we actualy do not remember union cases at runtime all checks are just compile time using the interfaces we defined earlier.
  case(...) method just chekc type and sets result to function result if there is no result yet. All methods return this to chain.

```ts
function union<T1>(t1: TypeDescriptor<T1>): Union1<T1>
function union<T1, T2>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>): Union2<T1, T2>
function union<T1, T2, T3>(t1: TypeDescriptor<T1>, t2: TypeDescriptor<T2>, t3: TypeDescriptor<T3>): Union3<T1, T2, T3>
// ... repeat yourself to infinity
function union(): any{
  return {
   match(value: any){
     var result: any;
     var match = false;
     return {
       default<T>(action: (v:T) => any) {
         result = action(value);
         match = true;
         return this;
       },
       case<T>(type: TypeDescriptor<T>, action: (v:T) => any) {
         if(!match && matchType<T>(type, value)) {
           result = action(value);
         }
         return this;
       },
       result: ()=> result
     }
   }
  }
}
```
