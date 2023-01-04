/*********************** A simple game winner checker ***********************/

/* calcAverage Function to calculate average of 3 numbers */
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
//Testing
console.log(calcAverage(10, 20, 30));
//Test Case 1 
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

//Display score of both teams
console.log(scoreDolphins, scoreKoalas);
const checkWinner =function(scoreDolphins, scoreKoalas) {

    if(scoreDolphins >= scoreKoalas * 2)
    {
        console.log(`Team Dolphin won the Match!!! ${scoreDolphins} vs. ${scoreKoalas}`);
    }
    else if (scoreKoalas >= scoreKoalas * 2)
    {
        console.log(`Team Koalas won the Match!!! ${scoreKoalas} vs. ${scoreDolphins}`);
    }
    else
    {
        console.log(`No team has won the Match:(`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test Case 2
const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins1, scoreKoalas1);