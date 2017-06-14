
//contruct the function for clozeCard

function ClozeCards(fulltext, cloze) {
    if (!(this instanceof ClozeCards)) {
        return new ClozeCards(fulltext, cloze);
    }
    this.cloze = cloze;
    this.fulltext = fulltext;
}

//create partial Text, replse cloze input with "...." in full text
ClozeCards.prototype.partial = function() {
    var createPartial = this.fulltext.replace(this.cloze, '...');
    return console.log("Partial Text: " + createPartial);
};

ClozeCards.prototype.cloze = function() {
    //generate error if cloze is missing in full text 
    var error = this.cloze + " is missing in " + this.fulltext;
    //match pattern text 
    
    var newCloze = RegExp(this.cloze, 'gi');
    
    console.log("hello: "+ newCloze);
    //set variable for matching cloze
    
    var result = this.fulltext.match(newCloze);
    if (result !== null) {
        return console.log("Card cloze: " + newCloze);
               
    } else {
        return console.log("Error: " + error);
    }
};


module.exports = ClozeCards;