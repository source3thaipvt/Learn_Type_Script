export {};
// union type  // line 24
// tuong tu enum: nhieu gia tri thi nen dung enum

enum PetType {
  Dog,
  Cat,
  Bird,
  Fish,
  Reptile,
}

interface Pet {
  name: string;
  type: PetType;
}
interface Address {
  city: string;
}
interface Contact {
  name: string;
  phone: string;
  email?: string;
  gender?: 'male' | 'female' | 'unknown';
  pet?: Pet;
  addresses?: Address[];
}
//Khai bao cung ten interface contact, tu merging interface
interface Contact {
  isDeleted?: boolean;
}

// khoi tao kho chua Contact, array
const contact: Contact[] = [];

// tao new Contact // object literal
// duck typing (structural typing)
const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0322324143',
  email: 'abc@gmail.com',
  gender: 'male',
  pet: {
    name: 'A',
    type: PetType.Cat,
  },
  isDeleted: false,
};
// push data
contact.push(newContact);

const otherContact: Contact = {
  name: 'Nguyen Van B',
  phone: '0322324143',
  isDeleted: false,
};

const anotherContact = {
  name: 'C',
  phone: '1234',
};
// anotherContact ko co kieu Contact nhung van push vao dc do tinh nang Duck typing( structural typing <nhapj cau truc)
// mien la cung kieu voi Contact
contact.push(anotherContact);

function getPetName(contact: Contact): string {
  return contact.pet?.name || 'Null';
  // neu pet.name underfind thi return ''
}

function getFistAddresses(contact: Contact) {
  return contact.addresses?.[0];
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));

interface Button {
  label: string;
  onClick: () => void; // ham callback
}
const button: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
};

interface IconButton extends Button {
  icon: string;
}
const addToCartBtn: IconButton = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
  icon: 'cart-icon',
};

class MyContact implements Contact {
  name: string;
  phone: string;
  isDeleted: false;
  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

// Type Inference: khai bao bien, neu biet giatri tra ve của biểu thức bên phải rồi thì ko cần phải khai báo gán kiểu
// || a: MyContact = new MyContact('dsa', 'dsads'),
const a = new MyContact('Ahihi', '0329324');
console.log(a.name);

interface ContactAdapter {
  // Neu lay data tu api
  getData: () => Promise<Contact[]>;
}
class ContactApp {
  adapter: ContactAdapter;
  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }
  async render() {
    const contacts = await this.adapter.getData();
    console.table(contacts);
  }
}

class MyContactAdapter implements ContactAdapter {
  async getData() {
    // get data from API
    const contacts: Contact[] = [
      { name: 'A', phone: '123', isDeleted: false },
      { name: 'B', phone: '456', isDeleted: false },
    ];
    return contacts;
  }
}
const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();

function foo() {
  let i: String;
  if (Math.random() > 0.5) {
    i = '5';
  } else {
    i = '10';
  }
  i.toUpperCase();
}

// contextual typing: giong type infrence lab 13

function doAfter(
  ms: number,
  callback: (value: boolean) => void
) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(true);
    } else {
      callback(false);
    }
  }, ms);
}
const cb = (value) => {
  // chi biet value la kieu any
  console.log(value);
};

doAfter(1000, (value) => {
  // no biet value 1 kieu boolean
  console.log(value);
});
