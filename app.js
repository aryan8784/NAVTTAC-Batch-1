// LOOPs
// let arr = ["Aryan","Javed","Akmal",123,678,true]
// for(let i = 0; i < arr.length; i++){
// 2 X 1 = 2
// }

// let userTable = +prompt("Enter your Table Value");
// let userStartrTable = +prompt("Enter your Table Value");
// let userEndTable = +prompt("Enter your Table Value");

// for (let i = userStartrTable; i <= userEndTable; i++) {
//   document.write(userTable + "X" + i + "=" + userTable * i + "<br>");
// }

// let arr = ["Aryan", "Javed", ["nested", "Array"], "Akmal", 123, 678, true];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// let sum = 0;
// for(let i = 0; i <=5; i++){
//     sum += i;
//     // sum = sum + i;
//     // 0 , 1 , 3, 6,10 ,15
// }
// console.log(sum);

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i = 1;
// do{
//     console.log("Hello World");
//     i++;
// }

// while(i >= 5)

// for of
// let str = "Aryan";
// let arr = ["Aryan","Javed","Akmal",123,678,true]

// for(let i of arr){
//     console.log(i);
// }

//

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }
// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 10; i++) {
//   let star = "";
//   for (let j = 1; j <= i; j++) {
//     star = star + "*";
//   }
//   console.log(star);
// }


// Template Literals
// A way to have embedded expressions in string

// let a  = "Aryan";
// let b = "Akmal";
// // let c = "Welcome " + a + b + "Thank yOU"
// let c = `Welcome My User ${a} \n a \t nd ${b} thanks`
// console.log(c);



// string Methods
// let a = "aryan";

// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim());
// console.log(a.charAt(4));


// Maths Method in js

// let per = 72.9457658568;

// console.log(Math.round(per));
// console.log(Math.ceil(per));
// console.log(Math.floor(per));
// console.log(per.toFixed(2));
// console.log(Math.random() * 10);



// let user1 = prompt("Enter Your Name 1st Player")
// let user2 = prompt("Enter Your Name 2nd Player")

// let toss = Math.random() * 2;

// let change = Math.floor(toss)

// if(change == 0){
//     console.log(`${user1} you have won the Toss ${change}`);
// }else{
//     console.log(`${user2} you have won the Toss ${change}`);
// }

// Password generator


// let randomValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()/|";
// let password = "";

// for(let i = 1; i<=5;i++){
//     let randomNumber = Math.floor(Math.random() * randomValues.length)
//     // console.log(randomNumber);
//     password += randomValues[randomNumber]
// }

// console.log(password);


// Date 
// let d = new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(d.getTime());


// let firstRAMADAN = new Date("2 march 2025")
// let today = new Date()

// let diff = firstRAMADAN.getTime() - today.getTime()
// // console.log(diff);
// // let days= 1000 * 60 * 60 * 24 * 30 * 365
// let days = diff / (1000 *60 *60 *24)
// console.log(Math.round(days));


// let months = diff / (1000 *60 *60 *24 * 30)
// console.log(Math.round(months));