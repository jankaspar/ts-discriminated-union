/// <reference path="../dist/index.d.ts" />
import { union } from 'ts-discriminated-union'

// with same base class
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

// or without base ...

class Cat {
  constructor(public numberOfLives: number){ }
}
class Dog {
  constructor(public name: string){ }
}
const animalKind = union(Cat, Dog);
type Animal = typeof animalKind.type

function describe(a: Animal){
  return animalKind.match(a)
    .case(Cat,  c => 'cat with ' + c.numberOfLives + 'lives' )
    .case(Dog, d => 'dog named ' + d.name)
    .result();
}
