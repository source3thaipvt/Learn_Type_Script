// Cac kieu gan trong typeScripts
const age = 1;
let newVer; // tu gan type any
let string;
function sums(a, b) {
    // tra ve la number. neu ko co la any tu hieu
    return a + b;
}
const multiply = (a, b) => a * b;
const sendMail = async ({ email, subject, content, }) => {
    // tra ve Promise
    const res = await console.log('Send mail');
    return res;
};
function waitAndDo(callback) {
    setTimeout(() => {
        callback('Ahihi');
    }, 1000);
}
waitAndDo((param) => { });
class Dog {
    sayHi(name) {
        console.log('Gau gau', name);
    }
}
