// function submit() {
//     let name = document.getElementById("name");
//     let email = document.getElementById("email");
//     let heading = document.getElementById("heading");


//     heading.innerHTML = `Your Name is ${name.value} and Email is ${email.value}`;


//     name.value = ""
//     email.value = ""



// }



// Objects
// Object is a collection of properties

// let obj = {
//     "name" : "Aryan",
//     "age" : 24,
//     "email":"arayn@gmail.com",
//     color : ["red","black","white"]

// }

// console.log(obj.color[1]);
// console.log(obj["name"]);



// let cars ={
//     honda:{
//         civic:{
//             reborn:{
//                 name:"Civic Honda Reborn",
//                 price:"$788990",
//                 year:2024,
//                 colors : ["black","white","gray"]
//             }
//         }
//     }
// }

// cars.honda.civic.reborn.price = "$11111"
// delete cars.honda.civic.reborn.price
// for(let company in cars){
// // console.log(company);
// for(let modal in cars[company]){
//     // console.log(modal);
//     for(let varient in cars[company][modal]){
//         console.log(cars[company][modal][varient]);
//     }
// }
// }

// let user = "honda";
// let modal = "civic"
// let varient = "reborn"
// console.log(cars[user][modal][varient].colors[2]);
// // console.log(cars.honda.civic.reborn.name);




// ===================Local Storage
// let user = prompt("enter name")
// localStorage.setItem("UserName",user)
// localStorage.clear()


// function Signup() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     localStorage.setItem("Email", email)
//     localStorage.setItem("Password", password)

//     location.href = "./SingIn.html"
// }

// function SignIn() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;


//     if (localStorage.getItem("Email") == email && localStorage.getItem("Password") == password) {
//         alert("Welcome user")
//         location.href = "./welcome.html"
//     } else {
//         alert("Invalid")
//     }


// }

// function logout(){
//     localStorage.clear()
//     location.href = "index.html"
// }