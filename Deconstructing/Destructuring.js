/*Problem One
*/
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)/// Tesla
console.log(otherRandomCar)/// Mercedes
/*Problem Two
*/
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);//No output here because the variable "name" has been reassigned 
console.log(otherName);// Elon ,because we assigned the value of "name" into "otherName"
/*Problem Three
*/ 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);//It will be "12345" because it went and found the password with the same name and no changes and it's not inside an object.
console.log(hashedPassword);// It will be undefined because it will go and look for password inside the "person" constant and wouldn't find any.
/*Problem Four
*/
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first)//2
console.log(second)//5
console.log(third)//2
console.log(first == second);// This will give us False because the value assigned for const['first'] is 2, and the value assigned for const['second'] is 5.
console.log(first == third);//This will give us True because the value assigned for const['first'] is 2, and the value assigned for const['third'] is 2.
/*Problem Five
*/
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);// The output will be 'value'
console.log(secondKey);//The output will be [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// The output will be "1"
console.log(willThisWork);//The output will be "5"






