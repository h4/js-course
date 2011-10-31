var a=6,
    b=2,
    x=6;

console.log('1. ' + (++a + b)); //7+2 = 9. a=7, b=2

console.log('2. ' + (--a + b)); //6+2 = 8. a=6, b=2
console.log('3. ' + (a++ + b)); //6+2 = 8. a=7, b=2
console.log('4. ' + (a-- + b)); //7+2 = 9. a=6, b=2

console.log('5. ' + (x+=2));
console.log('6. ' + (x-=2));
console.log('7. ' + (x*=2));
console.log('8. ' + (x/=2));