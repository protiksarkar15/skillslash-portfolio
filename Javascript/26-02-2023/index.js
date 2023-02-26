let i = 0;

for(i = 1; i <= 10; i++) {
    console.log('2 * '+ i + ' = ' + 2*i );
}
console.log('-------------------------');
for(i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${2*i}` );
}
console.log('-------------------------');
for(i = 1; i <= 10; i=i+2) {
    console.log(`2 * ${i} = ${2*i}` );
}
console.log('-------------------------');
for(i = 10; i > 0; i--) {
    console.log(`${i}`);
}