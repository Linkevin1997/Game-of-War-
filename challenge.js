//declare variable
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const cardNum = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];



class Deck {
  constructor() {
    this.cards = [];
  }
}

class Card {
  constructor(suit, num, value) {
    this.suit = suit;
    this.num = num;
    this.value = value;
  }
}

const fullDeck = new Deck()

for (let i = 0; i < suits.length; i += 1) {
  for (let j = 0; j < cardNum.length; j += 1) {
    fullDeck.cards.push(new Card(suits[i], cardNum[j], j));
  }
}


//shuffle deck
fullDeck.cards.sort((a, b) => Math.random() - .5)

//distribute 2 decks:
const playerOne = fullDeck.cards.splice(0, 26)
const playerTwo = fullDeck.cards

//compare cards
//if p1 wins
//take both cards
//if p2 wins
//take both cards
//tie condition
//skip 3 cards
function compare() {
  let cardOne = playerOne.pop()
  let cardTwo = playerTwo.pop()
  if (cardOne.value > cardTwo.value) {
    playerOne.unshift(cardOne, cardTwo)
  } else if (cardTwo.value > cardOne.value) {
    playerTwo.unshift(cardTwo, cardOne)
  } else {
    console.log('tie');
  }
}
compare()
console.log(playerOne.length)


//seperate function to handle the tie: //tie condition
//remove last three cards from both player deck. Put them in a constant, compare next card. 
//winner get three cards.
function handleTie() {
  let oneRemove = playerOne.splice(playerOne.length - 3, 3)
  let twoRemove = playerTwo.splice(playerTwo.length - 3, 3)
  let twoOne = playerTwo.pop()
  let oneOne = playerOne.pop()
  if (oneRemove > twoRemove) {
    playerOne.
  }
}

//create function to play the game.

