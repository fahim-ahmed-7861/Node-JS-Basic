/*
 * Title: Basic Node app example
 * Description: Simple node application that print random quotes per second interval.
 * Author: Fahim Ahmed Shojib
 * Date: 11/09/19
 *
 */

// Dependencies

const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');


//App object module scaffolding 

const app = {}

// configuration 

app.config=
{
  timeBetweenQuotes : 1000,

}

app.printAQuote = function printAQuote()
{
    //Get all the quotes 

    const allQuotes = quotesLibrary.allQuotes();

    //Get the length of the quotes
    const numberofQuotes = allQuotes.length;

     // Pick a random number between 1 and the number of quotes
     const randomNumber = mathLibrary.getRandomNumber(1, numberofQuotes);

     // Get the quote at that position in the array (minus one)
     const selectedQuote = allQuotes[randomNumber - 1];
 
     // Print the quote to the console
     console.log(selectedQuote);
}
// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
