// interface

export {};
console.log('Lab7 Interface');
// interface
interface Contact {
  name: string;
  phone: string;
  email: string;
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
