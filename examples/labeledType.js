"use strict";
var ts_discriminated_union_1 = require('ts-discriminated-union');
var square = ts_discriminated_union_1.createTypeDescriptor('SQUARE');
var rectangle = ts_discriminated_union_1.createTypeDescriptor('RECTANGLE');
var circle = ts_discriminated_union_1.createTypeDescriptor('CIRCLE');
var triangle = ts_discriminated_union_1.createTypeDescriptor('TRIANGLE');
var shapeUnion = ts_discriminated_union_1.union(rectangle, square, circle);
function area(s) {
    return shapeUnion.match(s)
        .case(rectangle, function (_) { return _.width * _.height; })
        .case(circle, function (_) { return Math.pow(_.radius, 2) * Math.PI; })
        .case(square, function (_) { return Math.pow(_.width, 2); })
        .result();
}
function isRound(s) {
    return shapeUnion.match(s)
        .case(circle, function (_) { return true; })
        .default(function (_) { return false; })
        .result();
}
function returnUnion(s) {
    return shapeUnion.match(s)
        .case(circle, function (_) { return "string"; })
        .default(function (_) { return 0; })
        .result();
}
area(rectangle.create({ width: 1, height: 1 }));
area({ type: 'RECTANGLE', width: 1, height: 2 });
