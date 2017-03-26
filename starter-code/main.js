//var cardOne = "queen"; //assigning values of kings and queens to four of the variable cards
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

// if (cardTwo===cardFour) {
//  alert("You found a match!")
// } else {
//  alert("Pleas try again!")
// };

var cards = ["king", "king", "queen", "queen"]; //creating arrays with 4 string elements for variable cards

var cardsInPlay = []; //declaring a variable with an empty array

var board = document.getElementById("game-board"); //setting the id game-board with a variable

function createBoard() { //defining function creatingCards 

    for (var i = 0; i < cards.length; i++) {//making a loop the number of times with respect to the number of arrays
            var jcards = document.createElement("div");//creating div elements and assigning it to variable jcards
            jcards.className = "card"; //giving div elements classname
            jcards.setAttribute("data-card", cards[i]); 
            jcards.addEventListener("click", isTwoCards);//adding an event listener on click that runs function isTwoCards
            board.appendChild(jcards);//placing jcards divs inside board container
            }
    }

function isTwoCards() { //creating a function to check two cards in play
    cardsInPlay.push(this.getAttribute("data-card"));//accessing the card the players click on
   if(this.getAttribute("data-card") === "king") {//if clicked on card is king, picture of 
        this.innerHTML = "<img src= 'images/king.jpg'>";//king card is brought from the images folder
    } else {
        this.innerHTML = "<img src='images/queen.jpg'>";//or else picture of queen is brought up
    }   

        if (cardsInPlay.length === 2) {//checking for a match if two cards are in play
            isMatch(cardsInPlay);//passing cardsInPlay as arguements for function isMatch to check comparision between two cards
            cardsInPlay = [];//empties the array after comparision

        }   
    }
function isMatch(cards) {
    if (cards[0] === cards[1]) {//checking if two values of the array are equal
        alert("you found a match");//pop up shows if there is a match
    } else {
        alert("sorry try again");//else another pop up shows if there is no match
    }
}

createBoard();//calling createBoard function

