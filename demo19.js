function myprint(data) {
  console.log(data);
}
var arr = new Array(3);
arr[0] = 10;
arr[1] = 99.99;
arr[2] = 'Srinivas Dande';
arr[3] = true;
myprint(arr);
myprint(typeof arr);
for (x in arr) {
  myprint(x + ' - ' + arr[x]);
}
myprint('---------------');
myprint(0 in arr);
myprint(1 in arr);
myprint(2 in arr);
myprint(4 in arr);
myprint(5 in arr);
//myprint(length in arr);
myprint('---------------');
myprint(arr[2]);
delete arr[2];
myprint(arr[2]);
myprint(arr[1]);
delete arr[1];
myprint(arr[1]);
myprint('---------------');
myprint(' Array Size - ' + arr.length);

for (x in arr) {
  console.log(arr[x]);
}
arr.forEach((i) => console.log(i));
