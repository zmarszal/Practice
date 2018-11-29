const isFunction = typeof reverseString === 'function';
const x = 'abcd'
const returnIsString = typeof reverseString(x) === 'string';
const paramIsString = typeof x === 'string';
const expectedValue = 'dcba';
const correctOutput = expectedValue === reverseString(x);

console.log(`The function reverseString is a function: ${isFunction}`);
console.log(`The function reverseString returns a string: ${returnIsString}`);
console.log(`The function reverseString has a parameters that are a string: ${paramIsString}`);
console.log(`The function reverseString returns the correct value of ${expectedValue}: ${correctOutput}`);



function reverseString(str){
    let newString = '';
    if(str === ''){
        return str;
    }
    else{
        let lastLetter = str[str.length-1];
        newString = lastLetter + reverseString(str.slice(0, str.length - 1));
    }

    return newString;
}
