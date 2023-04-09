var a = 10;
var b = 20;
 var sum = a+b;

 setTimeout(() => { console.log('SetTimeout - default')});
 setTimeout(() => { console.log('SetTimeout - 0')}, 0);
 setTimeout(() => { console.log('SetTimeout - 2000')}, 2000);
 setTimeout(() => { console.log('SetTimeout - 1000')}, 1000);

 console.log(a);
 console.log(b);
 console.log(sum);