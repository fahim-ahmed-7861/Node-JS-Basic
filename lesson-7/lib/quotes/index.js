/*

*Title : Basic Node App Example
*Description : Utility library for getting a list o quotes
second interval
*Author : Fahim Ahmed Shojib
*Date : 16-05-21

*/

// Dependencies

const fs = require('fs');

// Quotes object module scaffolding 

const quotes = {}


// Get All the quotes and return them to the user 

quotes.allQuotes = function allQuotes()
{
    //Read the text file containing the quotes
    const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`,'utf8');

    //Turn the string into a array 
    const arrayQuotes = fileContents.split(/\r?\n/);

    //Return the array

    return arrayQuotes;

}

//Export the library
module.exports = quotes;
