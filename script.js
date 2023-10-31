



/*
 Variables:
 // To create variables: 
    1) use a keyword : var, let, const
    2) give your variable a name
    3) Initialize the variable

    Examples below:
*/

    let num = 10;
    var fullName = "Jesus Correa"
    const PI = 3.1415;

/*
Data Types:
    1) Numbers
    2) Strings
    3) Characters
    4) Arrays
    5) HTML Elements
    6) Booleans -> True/false

Casing Conventions:
    1) Camel Case: randomNumber
    2) Snake Case: random_number

Scope: Where a variable lives
    1) Global Scope: You can use variables anywhere
        - You can use any keyword you like
    2) Function Scope: Variables created in the method, only live in the method
        - All variables only live in the function they were created in
    2) Block Scope: 
        - if a variable is created using "var" keyword, you can use it outside of the block
        - if a variable is created using the "let" keyword, you can only use it in the block it was created in
        - if a variable is created using "const" keyword, you can only use it in the block 
*/

/*
Array Methods:
    1) push(item): Adds elements to the end of the array
    2) pop(): removes element from the end of the array
    3) unshift(item): adds an element to the front of the array
    4) shift(): removes element from the front of the array

    Examples below:
*/
    const nums = [4,1,7,5];
    nums.push(3);               //Adds 3 to the end of the array
    nums.pop();                 //Removes 3 from the end of the array
    nums.unshift("Staples");    //Adds the string "staples" to the beginning of the array
    nums.shift();               //Removes "staples" from the beginning of the array


/*
Comparing Operators
    - === : Checks if values are equal
    - !== : Checks if values are NOT equal
    - <= : Checks if left operand is less than or equal to right operand
    - >= : Checks if left operand is greater than or equal to right operand

Block Statements:
    - for loops: 
    - If statements
    - if else
    - if, else if, else
    - for...in 
    - for...of
    - for each
*/
    for(let i = 0; i < 10; i++){        //For loops work the same as in Java
        // console.log("YESSIRz!!!");      
    }

    if(nums.length > 10){               //If statement works the same as in Java
        // console.log("The length of the array is greater than 10!");
    }


    let num2 = 3;
    if((num2 % 2) === 0){              //If and else statements work the same as in Java
        // console.log("The number is even!");
    }
    else{
        // console.log("The number is odd!");

    }

    let num3 = 4;
    if(num3 < 10){                     //If and else if and else statements work the same as in Java
        // console.log("The number is less than 10");
    }
    else if(num3 > 10){
        // console.log("The number is greater than 10");
    }
    else{
        // console.log("The number is equal to 10");
    }


    //For each loop using an arrow function/ anonymous function
    nums.forEach(num => {
        console.log(num);
    })


    nums.forEach(function (num){
        console.log(num)
    });



/*
Functions:
    - Regular functions
    - Function Expressions
    - Anonymous Functions
    - Defining Functions inside of functions
    - Parameters/Default Parameters
*/
// let pizza = 10;

// console.log(pizza);

function squareArray(array){

    for(let i = 0; i < array.length; i++){
        array[i] = square(array[i]);
    }

    function square(num){
        return num*num;
    }
}

let quotient = divide(4)
console.log(quotient);

function divide(numerator, denominator = 0){
    return numerator/denominator;
    // console.log(denominator);
}

// function sum(num1, num2){

// } 

/*
    Objects: HashMap equivalent for JavaScript
    - You use key values pairs to store things
    - In Objects they dont always have to be the same data type
    - Adding things to Objects
        - Array syntax
        - Java Object syntax
    - Removing things from Object
        - delete operator
*/

//Creating an object and storing two key value pairs
const obj = {
    numOfStudents: 30,
    "yes": "word of affirmation"
}

//You can access items from an object in two ways:
    //- Like if it were an array: instead of an index, you use the key
    //- Like a Java Object when you want to access a variable form an object

//Example of accessing items like an array
console.log(obj["yes"]);                 // <- This code prints "word of affirmation" to the console.

//Example of accessing items like a Java Object property
console.log(obj.numOfStudents)         // <- This code prints 30 to the console. This way of accessing does not work for keys that are strings


//Adding items to an object after it has been created
    //- Like if it were an array: instead of an index, you use the key
    //- Like a Java Object when you want to access a variable form an object
obj["no"] = "Pepperoni";
obj.phrase = "Yea this is a new phrase";


//Removing keys values from an object.
delete obj.numOfStudents;

/*
    Web Development JavaScript
    - document.getElemebtById("id");
        - innerText
        - innerHTML
        - nextElementSibling 
        - parent
    - document.querySelector
    - document.querySelectorAll
    - style attribute on HTML elements
    - classList property
    - addEventListener()
    - event parameter
    - createElement() 
*/

