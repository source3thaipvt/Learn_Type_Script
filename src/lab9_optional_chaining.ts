export {};

import { send } from './mailer';

console.log('Lab9 Optional Chaining');

interface Pet {
  name: string;
}
interface Address {
  city: string;
}
interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
  addresses?: Address[];
}
// khoi tao kho chua Contact, array
const contact: Contact[] = [];
console.log(contact);
// tao new Contact
const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0322324143',
  email: 'abc@gmail.com',
  pet: {
    name: 'd',
  },
};
// push data
contact.push(newContact);
console.log(contact);
const otherContact: Contact = {
  name: 'Nguyen Van B',
  phone: '0322324143',
};
function getPetName(contact: Contact): string {
  return contact.pet?.name || 'Null';
  // neu pet.name underfind thi return ''
}

function getFistAddresses(contact: Contact) {
  return contact.addresses?.[0];
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));
console.log(getFistAddresses(newContact)?.city);
