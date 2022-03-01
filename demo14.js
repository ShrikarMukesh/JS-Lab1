var a = 10;
console.log(a);
console.log(a++);
console.log(++a);
console.log(10);
console.log('*******************');
function myprint(data) {
  console.log(data);
}
var a = 5;
myprint(a); //5
myprint(++a); //6
myprint(++a); //7
myprint(a--); //7
myprint(a++); //6
myprint(--a); //6
myprint(a); //6
myprint('Done');
