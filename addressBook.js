/*
 *Purpose: Address Book System Program using JavaScript.
 *@auther: Ganesh Gavhad
 *@since : 23.08.2021
 */
console.log("Welcome to the AddressBookService")
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

let addressBook1 = new AddressBook("Ganesh", "Gavhad", "Badnapur", "Jalna", "Maharashtra", 431202, 9139124143, "ganesh@gmail.com");
let addressBook2 = new AddressBook("Akash", "Thakur", "Panshir", "Auranga", "Maharashtra", 411023, 9855642456, "akash@gmail.com");
let addressBook3 = new AddressBook("Sachin", "Pawar", "Haveli", "Nager", "Maharashtra", 454641, 9587641212, "sachin@gmail.com");

//UC2 - Ability to ensure valid contavts are added.

try {
    addressBook1.fName = "ne";
    console.log(addressBook1.toString());
} catch (e) {
    console.error(e);
}

//UC3 - Ability to create a new address book array and add new contacts to it
 
let addressBookList = Array();
addressBookList.push(addressBook1, addressBook2, addressBook3);
console.log(addressBookList);