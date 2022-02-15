function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
const a = sum(5, 9, 3, 45, 2);
console.log(a);
