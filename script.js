/*********************** A simple game winner checker ***********************/

// /* calcAverage Function to calculate average of 3 numbers */
// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
// //Testing
// console.log(calcAverage(10, 20, 30));
// //Test Case 1 
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// //Display score of both teams
// console.log(scoreDolphins, scoreKoalas);
// const checkWinner =function(scoreDolphins, scoreKoalas) {

//     if(scoreDolphins >= scoreKoalas * 2)
//     {
//         console.log(`Team Dolphin won the Match!!! ${scoreDolphins} vs. ${scoreKoalas}`);
//     }
//     else if (scoreKoalas >= scoreKoalas * 2)
//     {
//         console.log(`Team Koalas won the Match!!! ${scoreKoalas} vs. ${scoreDolphins}`);
//     }
//     else
//     {
//         console.log(`No team has won the Match:(`);
//     }
// }

//checkWinner(scoreDolphins, scoreKoalas);

//Test Case 2
//const scoreDolphins1 = calcAverage(85, 54, 41);
//const scoreKoalas1 = calcAverage(23, 34, 27);

//checkWinner(scoreDolphins1, scoreKoalas1);

//End

// Write a js program to find maximum and minimum between four numbers(2 can be optional) using functions.

// let num1, num2, num3, num4;

// const minMAx = function(num1, num2, num3, num4)
// {
//     let max = 0;
//     let min = 99999;
//     //To Find Maximum
//     if(num1 > max)
//     {
//         max = num1;
//     }
//     if(num2 > max)
//     {
//         max = num2;
//     }
//     if(num3 > max)
//     {
//         max = num3;
//     }
//     if(num4 > max)
//     {
//         max = num4;
//     }
//     //To Find Minimum
//     if(num1 < min)
//     {
//         min = num1;
//     }
//     if(num2 < min)
//     {
//         min = num2;
//     }
//     if(num3 < min)
//     {
//         min = num3;
//     }
//     if(num4 < min)
//     {
//         min = num4;
//     }
//     console.log(`The Maximum Number is: ${max}`);
//     console.log(`The Minimun Number is: ${min}`);
// }

// //calling the function
// minMAx(10, 20, 30, 40);

// Write a ts program to check whether a number is even or odd using functions.

// let num
// const evenOdd = function(num)
// {
//     if(num % 2 == 0)
//     {
//         console.log(`The number is even: ${num}`);
//     }
//     else
//     {
//         console.log(`The number is odd: ${num}`);
//     }
// }

// //calling function
// evenOdd(10);
// evenOdd(11);

//JavaScript Arrays

// const friends = ['Ahmad', 'Ali', 'Asghar'];
// console.log(friends);

// var studentMarks = [150,100,200,400]
// console.log("studentMarks",studentMarks);
// studentMarks.push(130);
// console.log("studentMarks after push",studentMarks);
// studentMarks.pop()
// studentMarks.pop()
// console.log("studentMarks after pop",studentMarks)
// studentMarks.unshift(148)
// console.log("studentMarks after unshift",studentMarks)
// // studentMarks.shift()
// console.log("studentMarks after shift",studentMarks)
// studentMarks.splice(2,1,350)
// // studentMarks.splice(0,1)
// // studentMarks.splice(0,0, 350)
// // studentMarks.splice(4,0, 450)
// // studentMarks.splice(3,1)
// console.log("studentMarks after splice",studentMarks);


// write a ts function named sayGratitude that take input of student list, and say welcome to university e.g
// Hi, Naveed Welcome to university 

// const sayGratitude = function()
// {
//     const Students = new Array(5);
    
//     for(let i = 0; i < Students.length; i++)
//     {
//         Students[i] = prompt(`Enter Name of Student ${i + 1}`);
//     }

//     for(let j = 0; j < Students.length; j++)
//     {
//         console.log(`Hi, ${Students[j]} Welcome To University`);
//     }
// }

// sayGratitude();

//Arrays Concatination
// var userNumbers = [10,20,30,40,50];
// var userNumbers2 = [60,70,80,90,100];

// var concatArr = userNumbers.concat(userNumbers2);
// console.log("concatArr", concatArr);

// function simpleMethod(element, index) {
//     console.log("simpleMethod logs", element,index);
//     return element + 1
// }

// simpleMethod(10, 20);

