
//contruct the function for basic

function BasicCard(front, back) {
    if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }
    this.front = front;
    this.back = back;
}

BasicCard.prototype.printFront = function() {
    console.log("-----------------------------------------");
    console.log("Card Front: " + this.front);
    console.log("-----------------------------------------\n");
}
BasicCard.prototype.printBack = function() {
    console.log("-----------------------------------------");
    console.log("Card Back: " + this.back);
    console.log("-----------------------------------------\n");
};
module.exports = BasicCard;