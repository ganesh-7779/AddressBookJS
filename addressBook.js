
/*
 *Purpose: Address Book System Program using JavaScript.
 *@auther: Ganesh Gavhad
 *@since : 23.08.2021
 */
console.log("Welcome to the AddressBookService")
let addressBookList = Array();
const prompt = require('Prompt-sync')();
class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const fnRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (fnRegex.test(firstName))
            this._firstName = firstName;
        else
            throw 'Invalid First Name';

    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const lnRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (lnRegex.test(lastName)) {
            this._lastName = this.lastName;
        } else {
            throw 'Invalid Last Name'
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        const addRegex = RegExp("[A-Za-z]{4,}$")
        if (addRegex.test(address)) {
            this._address = this.address;
        } else {
            throw 'Invalid Address';
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        const cityRegex = RegExp("[A-Za-z]{4,}$")
        if (cityRegex.test(city)) {
            this._city = city;
        } else {
            throw 'Invalid city';
        }
    }

    get state() {
        return this._state;
    }
    set state(state) {
        const stateRegex = RegExp("[A-Za-z]{4,}$")
        if (stateRegex.test(state)) {
            this._state = state;
        } else {
            throw 'Invalid State';
        }
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw 'Invalid zip';
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = this.phoneNumber;
        } else {
            throw 'invalid Phone Number';
        }
    }

    get email() {
        return this._email;
    }
    set email(email) {
        const emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if (emailRegex.test(email)) {
            this._email = this.email;
        } else {
            throw 'Invalid email';
        }
    }
        toString() {
        return "FirstName : " + this.firstName + "\nLastName : " + this.lastName + "\nAddress :" + this.address +
            "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhoneNumber : " + this.phoneNumber +
            "\nemail : " + this.email;
    }
}

console.log("\nAdd Contacts")
function addContacts() {
    let fName = prompt("Enter First Name :");
    let lName = prompt("Enter Last Name :");
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City :");
    let state = prompt("Enter State :");
    let zip = prompt("Enter zip :");
    let phone = prompt("Enter Phone Number :");
    let email = prompt("Enter Email :");
    let person = new AddressBook(fName, lName, address, city, state, zip, phone, email);
    addressBookList.push(person);
}
addContacts();


//UC4 - ability to find exiting contact person using their name
function searchByName() {
    let personName = prompt("Enter Person name to find the contact details :")
    addressBookList.forEach(element => {
        if (element.firstName == personName) {
            console.log("\nContact Found \n" + element);
        }
        else {
            console.log("Incurrect First Name Please enter valid");
        }
    }
    )
}
searchByName();

//UC -5 Delete by first Name.

function deleteByFirstName() {
    let personName = prompt("Enter Person name to delete contact details :")
    addressBookList.forEach(element => {
        if (element.firstName == personName) {
            let index = addressBookList.indexOf(element)
            addressBookList.splice(index)
            console.log("Deleted Successfully" + addressBookList);
         } else {
            console.log("Contact Not Found");
        }
    })
}
deleteByFirstName();

//UC-6 Get size of addressbook
function getSize() {
    console.log("Number of contacts :" + addressBookList.length)
}
getSize();

//UC7- ability to ensure there is no duplicate key

function duplicateEntries(){
    let uInput = prompt("Enter name you want to search for duplicate entry");
    if(addressBookList.some(s=> s.firstName == uInput)){
        console.log("contact already exists")
    }else{
        console.log("contact not exit");
    }
}
duplicateEntries();