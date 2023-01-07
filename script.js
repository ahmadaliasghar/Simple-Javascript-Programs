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

let num1, num2, num3, num4;

const minMAx = function(num1, num2, num3, num4)
{
    let max = 0;
    let min = 99999;
    //To Find Maximum
    if(num1 > max)
    {
        max = num1;
    }
    if(num2 > max)
    {
        max = num2;
    }
    if(num3 > max)
    {
        max = num3;
    }
    if(num4 > max)
    {
        max = num4;
    }
    //To Find Minimum
    if(num1 < min)
    {
        min = num1;
    }
    if(num2 < min)
    {
        min = num2;
    }
    if(num3 < min)
    {
        min = num3;
    }
    if(num4 < min)
    {
        min = num4;
    }
    console.log(`The Maximum Number is: ${max}`);
    console.log(`The Minimun Number is: ${min}`);
}

//calling the function
minMAx(10, 20, 30, 40);


//JavaScript Arrays

const friends = ['Ahmad', 'Ali', 'Asghar'];
console.log(friends);