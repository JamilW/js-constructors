const inquirer = require("inquirer");
const Word = require("./Word.js");

const wordGuess = new Letters();

var randWord = ["Rap", "Jazz", "Rock", "R&B", "Classical", "Blues", "Soul", "Metal", "Pop"];
   
wordGame = (wordGuess) => {
    for(var i = 0; i > randWord.length; i++)    {
        var count = 9;
        console.log("Guess a letter");
        console.log(JSON.stringify(randWord.length[i]));
        count--;
    }
};



