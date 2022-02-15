import * as Lab4 from './lab4';
import * as Lab6 from './lab6';
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
const a = sum(5, 9, 23, 45, 2);
console.log(a);

Lab4;
Lab6;
