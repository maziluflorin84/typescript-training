"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// let's create an instance
let myCustomer = new Customer("Florin", "Mazilu");
console.log(`First Name: ${myCustomer.firstName}`);
console.log(`Last Name: ${myCustomer.lastName}`);
