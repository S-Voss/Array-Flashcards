//Require node fs.
var fs = require('fs');

//Require the inquirer npm package.
var inquirer = require('inquirer');

//Define a node module that exports the constructor used to create basic flashcards.
module.exports = ClozeCard;

//The constructor used to generate Cloze card question
function ClozeCard(text, cloze) {
    this.cloze = ". . .";
    //How do I take out the cloze portion when I do not know where within the question it will be?
    this.partial = cloze;
    this.fullText = text;
};

//Prototype Function which asks the questions necessary to create a new flashcard.
ClozeCard.prototype.createCard = function() {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
        {
        name: "fullText",
        message: "What is the entire statement (including the answer) you wish to quiz users on?"
        }, {
        name: "cloze",
        message: "What portion of the statement do you wish to quiz users on?"
        }
    ]).then(function(response) {
        // initializes the variable newguy to be a programmer object which will
        // take in all of the user's response to the questions above
        var newClozeQuestion = new ClozeCard (
        response.cloze,
        response.fullText
        );
        //Push the newClozeQuestion object into a JSON file to be stored for later use
        
    });
};

//Prototype Function which handles potential error cases while an admin creates a new question/answer.
ClozeCard.prototype.errorMessage = function() {
    if (error) throw error;
};