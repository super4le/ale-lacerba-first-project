console.log("hello world!")
console.log("This is my first Node project!")

let myVar: number = 3;
myVar += 10;

console.log("myVar = ", myVar);


interface MyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: "Hello world",
};

console.log('myNumber = ', myInterface.myNumber);
console.log('myString = ', myInterface.myString);