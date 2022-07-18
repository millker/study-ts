let apples: number = 5;
let str = '1234'
// Array
let colors: string[] = ['red', 'green'];

let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, false]

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: {
    x: number,
    y: number
} = {
    x: 1,
    y: 2
}
// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

let x: boolean | number = false
x = 1