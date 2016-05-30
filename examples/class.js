"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_discriminated_union_1 = require('ts-discriminated-union');
var ContactInformation = (function () {
    function ContactInformation() {
        var _this = this;
        this.match = function () { return ts_discriminated_union_1.union(Email, Phone).match(_this); };
    }
    return ContactInformation;
}());
var Email = (function (_super) {
    __extends(Email, _super);
    function Email(email) {
        _super.call(this);
        this.email = email;
    }
    return Email;
}(ContactInformation));
var Phone = (function (_super) {
    __extends(Phone, _super);
    function Phone(telephone) {
        _super.call(this);
        this.telephone = telephone;
    }
    return Phone;
}(ContactInformation));
function getContact(i) {
    return i.match()
        .case(Phone, function (p) { return 'phone' + p.telephone; })
        .case(Email, function (e) { return 'email' + e.email; })
        .result();
}
getContact(new Phone('132456'));
var Cat = (function () {
    function Cat(numberOfLives) {
        this.numberOfLives = numberOfLives;
    }
    return Cat;
}());
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    return Dog;
}());
var animalKind = ts_discriminated_union_1.union(Cat, Dog);
function describe(a) {
    return animalKind.match(a)
        .case(Cat, function (c) { return 'cat with ' + c.numberOfLives + 'lives'; })
        .case(Dog, function (d) { return 'dog named ' + d.name; })
        .result();
}
