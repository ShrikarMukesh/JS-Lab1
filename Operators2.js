function myprint(data) {
  console.log(data);
}

var a = 19;
myprint(a);
myprint(typeof a);
a = 9.9;
myprint(a);
myprint(typeof a);
a = 'Hello Guys';
myprint(a);
myprint(typeof a);
var mystr = new String('Hello Guys');
myprint(mystr);
myprint(typeof mystr);

var arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
myprint(arr);
myprint(typeof arr);

var dob = new Date();
myprint(dob.getDate() + '-' + dob.getMonth() + '-' + dob.getFullYear());
myprint(typeof dob);
myprint('---------------');
myprint(dob instanceof Date); //T
myprint(dob instanceof Array);
myprint(dob instanceof String);
myprint('---------------');
myprint(arr instanceof Date);
myprint(arr instanceof Array); //T
myprint(arr instanceof String);
myprint('---------------');
myprint(mystr instanceof Date);
myprint(mystr instanceof Array);
myprint(mystr instanceof String); //T
myprint('---------------');
myprint(mystr instanceof Object);
myprint(arr instanceof Object);
myprint(dob instanceof Object);
