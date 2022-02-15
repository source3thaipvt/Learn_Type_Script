import * as Lab4 from './lab4';
import * as Lab6 from './lab6';
import * as Lab7 from './lab7_interface';
import * as Lab8 from './lab8_optional_properties';
import * as Lab9 from './lab9_optional_chaining';
import * as Lab10 from './lab10_extend_interface';
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
const a = sum(5, 9, 23, 45, 2);
console.log(a);

Lab4;
Lab6;
Lab7;
Lab8;
Lab9;
Lab10;
