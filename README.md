# Typescript Discriminated Union

This is work in progress, may not work at all and documentation may be misleading.

Represent discriminated unions in typescript.
- compile time exhaustive matching, never miss the case
- correct return type inferred (if one case return `string` and other `number` result is `string | number`)

[More detailed explanation of types](./doc/types-explained.md)

## Api
You can match on union of types having their descriptors.

```ts
var unionKind = union(...typeDescriptors);
type Union = typeof unionKind.type // typeDescriptor1 type | typeDescriptor2 type | ...

var value = unionKind.match(value)
  .case(typeDescriptor1, _ => /*... what to return ...*/ )
  .case(typeDescriptor2, _ => /*... what to return ...*/ )
  ...
  .default(_ => /* catch all case */)
  .result()

```

TypeDescriptor is either any class or instance of TypeMatcher:

```ts
interface TypeMatcher<T>{
  match(type: any): type is T
}
```

Library includes type descriptor for plain objects with `type` property.

p. e. for objects
```ts
{
  type: 'NAMED',
  name: string
}
```
you can create descriptor
```ts
const namedKind = createTypeDescriptor<{ name: string }, 'NAMED'>('NAMED');
```

Examples:
[classes](./examples/class.ts),
[plain objects](./examples/labeledType.ts).

## Limitations
Currently types are generated for union of max 24 types (this can be increased by `UNION_MAX` constant in `/src/union.ts.tmpl`.
