const names = ['Justin', 'Sarah', 'Christopher' , 'Oraya'];

console.log('-- while --');
console.log(' ');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}
console.log(' ');
console.log('-- for --');
console.log(' ');
for (let index = 0; index < names.length; index++){
    const name = names[index];
    console.log(name);
}
console.log(' ');
console.log('-- for of --');
console.log('');
for (let name of names) {
    console.log(name);
}

//do while
console.log(' ');
console.log('-- Do While -- ');
console.log(' ');
do{
    (index < names.length)
    console.log(names);
}while ( index   < names.length)
console.log('');
console.log('');