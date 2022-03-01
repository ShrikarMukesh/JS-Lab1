function myprint(data) {
  console.log(data);
}

var a = 19;
myprint('a<<1 : ' + (a << 1));
myprint('a<<2 : ' + (a << 2));
myprint('a>>1 : ' + (a >> 1));
myprint('a>>2 : ' + (a >> 2));

var x = 15;
var y = 17;
myprint('x & y : ' + (x & y));
myprint('x | y : ' + (x | y));
myprint('x ^ y : ' + (x ^ y));
myprint('~x : ' + ~x);
myprint('~y : ' + ~y);
myprint('0101<<1 : ' + (0101 << 1));
myprint('0101>>1 : ' + (0101 >> 1));
myprint('0101>>2 : ' + (0101 >> 2));
