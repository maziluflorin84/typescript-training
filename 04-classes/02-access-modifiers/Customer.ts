class Customer {
    private _firstName: string;
    private _lastName: string;
    
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    
    
    get firstName() : string {
        return this._firstName;
    }
    
    set firstName(value : string) {
        this._firstName = value;
    }
    
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myCustomer = new Customer("Florin", "Mazilu");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

myCustomer.firstName = "Miruna";
myCustomer.lastName = "Mazilu";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);