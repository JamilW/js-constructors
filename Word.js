const Letters = require("./Letter.js");

const Word = function(word) {
    this.Letters = [];
    this.word = word;
    this.addLetter = (word) =>  {
        this.Letters.push(new Letters(word))
    }
} 

module.exports = Word;