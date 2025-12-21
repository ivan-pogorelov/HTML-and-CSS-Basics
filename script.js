//1) console.log — My best friend
// const userName = "Harday";
// let userAge = 25;

// console.log("Name", userName);
// console.log("Age", userAge);

// userAge = userAge + 1;
// console.log("New age:", userAge);

// console.log(typeof userName);
// console.log(typeof userAge);

// 2) Basics example
// const age = 18;
// if (age >= 18) {
//   console.log("You are adult");
// } else {
//   console.log("You are minor");
// }

// 3) Else If
// const score = 55;

// if (score >= 90) {
//   console.log("Excellent");
// } else if (score >= 70) {
//   console.log("Good");
// } else if (score >= 50) {
//   console.log("Not bad");
// } else {
//   console.log("Fail");
// }

//4) AND — &&
// const age = 20;
// const hasPassport = false;

// if (age >= 18 && hasPassport) {
//   console.log("You can travel");
// } else {
//   console.log("You can't travel");
// }

//5) OR — ||
// const isAdmin = false;
// const isModerator = true;

// if (isAdmin || isModerator) {
//   console.log("Access granted");
// }

//6) NOT — !
// const isBlocked = false;

// if (!isBlocked) {
//   console.log("User is active");
// }

//My task 1
// const userName = "Harday";
// const userAge = 18;

// if (userAge >= 18) {
//   console.log(userName + " is adult");
// } else if (userAge <= 17 && userAge >= 13) {
//   console.log(userName + " is teenager");
// } else {
//   console.log(userName + " is child");
// }

//Recommendation task 1
// const userName = "Harday";
// const userAge = 17;
// let userStatus;

// if (userAge >= 18) {
//   userStatus = "adult";
// } else if (userAge >= 13) {
//   userStatus = "teenager";
// } else {
//   userStatus = "child";
// }

// console.log(userName + " is " + userStatus);

//Loops - For (FizzBuzz)
// for (let i = 1; i <= 10; i++) {
//   console.log("i =", i);

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// My task 2 (Loops)
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

//My task 3 (Function)
// function isAdult(age) {
//   if (age >= 18) {
//     return "adult";
//   } else {
//     return "underage";
//   }
// }

// console.log(isAdult(20));
// console.log(isAdult(15));

//Recommendation task 3
// function isAdult(age) {
//   return age >= 18 ? "adult" : "underage";
// }

// console.log(isAdult(20));
// console.log(isAdult(15));

//Function + For
// function printNumbers(limit) {
//   for (let i = 1; i <= limit; i++) {
//     console.log(i);
//   }
// }

// printNumbers(5);
// printNumbers(3);

//Tusk 4 (Function + For)
// function countDown(start) {
//   for (let i = start; i > 0; i--) {
//     console.log(i);
//   }
// }

// countDown(5);

//Arrow Functions
const isAdult = (age) => {
  return age >= 18 ? "adult" : "underage";
};

console.log(isAdult(12));

const countDown = (start) => {
  for (let i = start; i > 0; i--) {
    console.log(i);
  }
};

countDown(5);
