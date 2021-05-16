/*

*Title : Basic Node App Example
*Description : Simple node application that prin random quotes per 
second interval
*Author : Fahim Ahmed Shojib
*Date : 16-05-21

*/

// Math object module scaffolding 

const math = {}

//Get a random integer between two intergers

// Inspired by :  stackoverfolow

math.getRandomNumber = function (min,max)
{
    let minimum =  min;
    let maximum = max;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    return Math.floor(Math.random() * (maximum - minimum +1) + min);


}

module.exports = math;
