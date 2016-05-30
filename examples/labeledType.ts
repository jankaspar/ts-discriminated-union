/// <reference path="../dist/index.d.ts" />
import { createTypeDescriptor, union } from 'ts-discriminated-union'

const square = createTypeDescriptor<{ width: number }, 'SQUARE'>('SQUARE');
const rectangle = createTypeDescriptor<{ width: number; height: number }, 'RECTANGLE'>('RECTANGLE');
const circle = createTypeDescriptor<{ radius: number }, 'CIRCLE'>('CIRCLE');
const triangle = createTypeDescriptor<{ a: number, b: number, c: number }, 'TRIANGLE'>('TRIANGLE');
const shapeUnion = union(rectangle, square, circle /* ,triangle */); // uncomment triangle to break the build
type Shape = typeof shapeUnion.type;

function area(s:Shape) {
  return shapeUnion.match(s)
    .case(rectangle, _ => _.width * _.height)
    .case(circle, _ =>  Math.pow(_.radius, 2) * Math.PI)
    .case(square, _ =>  Math.pow(_.width, 2))  // try replacing square with triangle to break the build
    .result(); //result
}

function isRound (s:Shape) {
  return shapeUnion.match(s)
    .case(circle, _ => true)
    .default(_ => false)
    .result(); // boolean
}

function returnUnion (s:Shape) {
  return shapeUnion.match(s)
    .case(circle, _ => "string")
    .default(_ => 0)
    .result(); // string | number
}

area(rectangle.create({ width: 1, height: 1 }));
area({ type: 'RECTANGLE', width: 1, height: 2 });
