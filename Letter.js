const Letter = function()   {
    guess = " ";
    placeholder = "_";
    this.guess = guess;
    this.isCorrect = false;
};
letterFunc = (Word) =>   {
    if (this.guess !== this.isCorrect)  {
    console.log("CORRECT!!!");
    return this.guess;    
}   else  {
    console.log("INCORRECT!!!");
    this.isCorrect = true
    return this.placeholder;
    }
}

module.exports = Letter;