class Customer01 {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let's create an instance
let myCustomer01 = new Customer01("Florin", "Mazilu");

console.log(myCustomer01.firstName);
console.log(myCustomer01.lastName);