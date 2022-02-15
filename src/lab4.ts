// Cac kieu gan trong typeScripts

const age: number = 1;

let newVer; // tu gan type any
let string: string;

function sums(a, b): number {
  // tra ve la number. neu ko co la any tu hieu
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

const sendMail = async ({
  email,
  subject,
  content,
}: {
  email: string;
  subject: string;
  content: string; // day la 1 interface
}): Promise<void> => {
  // tra ve Promise
  const res = await console.log('Send mail');
  return res;
};

function waitAndDo(callback: (param: string) => void) {
  setTimeout(() => {
    callback('Ahihi');
  }, 1000);
}

waitAndDo((param) => {});

class Dog {
  sayHi(name: string) {
    console.log('Gau gau', name);
  }
}
