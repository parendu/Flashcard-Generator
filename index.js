//export moduels from basicCard and ClozeCard
var inquirer = require('inquirer');
var basicCard = require('./BasicCard.js');
var clozeCard = require('./ClozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');

//create new Card based on user selection

function newCards() {
    inquirer.prompt([{
            type: 'list',
            name: 'cardType',
            message: 'Please specify the card, you would like to create:',
            choices: ['basic', 'cloze'],
            filter: function(val) {
                return val.toLowerCase();
            }
        }
            ]).then(function(answer) {
            
            var cardType = answer.cardType;
               // console.log(cardType);
            //Select questions based on basic or cloze
            switch (cardType) {
                case 'basic':
                inquirer.prompt([{
                    name: 'basicCardFront',
                    message: 'what do you want on the front of the card ?',
                    type: 'input'
                }, {

                    name: 'basicCardBack',
                    message: 'what do you want on the back of the card ?',
                    type: 'input'
                }

                ]).then(function(question){
                    //console.log(question.basicCardFront);
                    //console.log(question.basicCardBack);
                    var basicCardQuestion = basicCard(question.basicCardFront, question.basicCardBack);
                   //print Front and Back
                    basicCardQuestion.printFront();
                    basicCardQuestion.printBack();

                    //log data to file
                    
                    var logData = ("cardType: " + answer.cardType + ", " 
                                    + "cardFront: " +question.basicCardFront +", "
                                    + "cardBack: " + question.basicCardBack);

                    //console.log(JSON.stringify(result, null, 2));

                    fs.appendFile('log.txt', logData, function(err) {
                    if (err) throw err;
                    console.log('Saved!');
                    });

                });

                  break;
                case 'cloze':
                inquirer.prompt([{
                    name: 'clozeCardFullText',
                    message: 'Please enter full text, which has answer:',
                    type: 'input'
                }, {

                    name: 'clozeCardCloze',
                    message: 'Please enter answer only: ',
                    type: 'input'
                }

                ]).then(function(question){
                    console.log(question.clozeCardFullText);
                    console.log(question.clozeCardCloze);
                    var clozeCardQuestion = clozeCard(question.clozeCardFullText, question.clozeCardCloze);
                  //  console.log(clozeCardQuestion.cloze);
                    //print partial and cloze
                    console.log("----------------------")
                    clozeCardQuestion.partial();
                    console.log("----------------------")
                    clozeCardQuestion.cloze();
                    console.log("----------------------")
                    //log data to file
                    
                    var logData = ("cardType: " + answer.cardType + ", " 
                                    + "cardFront: " + createPartial +", "
                                    + "cardBack: " + question.clozeCardCloze);

                    //console.log(JSON.stringify(result, null, 2));

                    fs.appendFile('log.txt', logData, function(err) {
                    if (err) throw err;
                    console.log('Saved!');
                    });

                });
                break;
                                
                default:
                console.log('Missing question or answer');

            }

        }); 


};  //function closing new Card

//fuctions
newCards();