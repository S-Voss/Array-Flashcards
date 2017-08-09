//Require node fs.
var fs = require('fs');

//Require the inquirer npm package.
var inquirer = require('inquirer');

//Define a node module that exports the constructor used to create basic flashcards.
module.exports = BasicCard;


//Build the constructor that you will use to create questions.
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

//Prototype Function which asks the questions necessary to create a new basic flashcard.
BasicCard.prototype.createCard = function() {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
        {
        name: "front",
        message: "What question would you like to ask?"
        }, {
        name: "back",
        message: "What is the answer to your question?"
        }
    ]).then(function(response) {
        // initializes the variable newguy to be a programmer object which will
        // take in all of the user's response to the questions above
        var newBasicQuestion = new BasicCard (
        response.front,
        response.back
        );
        //Push the newClozeQuestion object into a JSON file to be stored for later use
        fs.writeFile('log.txt', logTxt, function(err){
            try {
                var questionString = fs.readFile('questions-list.json');
                return JSON.parse(questionString);
            } catch(err) {
                return [];
            }
        })
    });
};