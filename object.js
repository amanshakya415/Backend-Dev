//Q1 Create an object student with properties name, age, and grade.
let Student ={
    name : "Aman" ,
    age : 21 ,
    grade : "A"
}

//Q2 Add a new property country to an existing object person.
//Q3 Access and print the value of city from a nested object address.
let person ={
    address : {
        city : "Agra"
    }

}
person.country = "India";
console.log(person);
console.log(person.address.city);


//Q4 Convert a string "javascript" to uppercase.
let str = "javascript"
console.log(str.toUpperCase());

//Q5 Find the length of the string "Hello World".
let str1 = "Hello World"
console.log(str1.length);

//Q6 Join two strings "Hello" and "JavaScript" with a space in between.
let str2 = "Hello"
let str3 = "javascript"
let result = str2 + " " + str3
console.log(result);

//Q7 Check whether the string "Coding is fun" contains the word "fun".
let str4 = "Coding is fun"
if(str4.includes("fun")) {
    console.log("The string contains the word 'fun'");
}
else{
    console.log("The string does not contain the word 'fun'");
}

//Q8  Count the number of characters in the string "Hello JS" excluding spaces.
let str5 = "Hello JS";
console.log(str5.length);

//Q9 Convert an object {name: "Amit", age: 21} into a JSON string.
const obj = { name: "Amit", age: 21 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);