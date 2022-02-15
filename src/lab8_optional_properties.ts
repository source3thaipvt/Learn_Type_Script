// optional properties: trai nguoc voi Require
// co cung duoc ko co cx duoc
// "strictNullChecks": true check kieu du lieu, se bao loi o lab8
export {};

import { send } from './mailer';

console.log('Lab8 Optional Properties');
// interface
interface Contact {
  name: string;
  phone: string;
  email?: string;
}
// khoi tao kho chua Contact, array
const contact: Contact[] = [];
console.log(contact);
// tao new Contact
const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0322324143',
  email: 'abc@gmail.com',
};
// push data
contact.push(newContact);
console.log(contact);

const otherContact: Contact = {
  name: 'Nguyen Van B',
  phone: '0322324143',
};
// push data
contact.push(otherContact);

// check email string | underfind
if (newContact.email) {
  send(newContact.email, '1', '2');
}
