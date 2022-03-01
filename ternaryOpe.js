var a = 90;
var b = 12;
var max = a > b ? a : b;
console.log(max);

function myprint(data) {
  console.log(data);
}
var min = a < b ? a : b;
myprint('Min : ' + min);

myprint('--------');
var a = 10;
var b = 20;
var c = 30;
var max = a > b && a > c ? a : b > c ? b : c;
myprint('Max : ' + max);
var min = a < b && a < c ? a : b < c ? b : c;
myprint('Min : ' + min);
