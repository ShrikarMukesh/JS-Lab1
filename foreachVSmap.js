const arr = [9, 2, 3, 4, 5];
const a = 90;
console.log(a === '90');

//arr.forEach((ele) => console.log(ele));

const result = arr.map((arr) => {
  return arr + 2;
});
console.log(result);

const res = arr.forEach((arr, i) => {
  return arr + 2;
});
console.log(res);
