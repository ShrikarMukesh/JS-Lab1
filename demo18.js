function myprint(data) {
  console.log(data);
}

var mystr = new String('Hello Guys');
myprint(mystr);
myprint(typeof mystr);

for (x in mystr) {
  myprint(x + ' - ' + mystr[x]);
}

myprint(0 in mystr);
myprint(1 in mystr);
myprint(2 in mystr);
myprint(9 in mystr);
myprint(10 in mystr);
myprint(11 in mystr);

myprint(mystr.length in mystr);

myprint('-------------');
myprint('1. ' + mystr[0]);
delete mystr[0];
myprint('2. ' + mystr[0]);
myprint('-------------');
myprint('1. ' + mystr);
delete mystr;
myprint('2. ' + mystr);
myprint('-------------');
x = 'hello';
myprint(x);
delete x;
//myprint(x);
myprint('Done');
