//declare variable
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const cardNum = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King','Ace'];



class Deck {
  constructor() {
    this.cards = [];
  }
}
  
class Cards {
  constructor(suit, card, value) {
    this.suit = suit;
    this.value = value; 
    this.card = card;
  }
}

const fullDeck = new Deck()

for (let i = 0; i < suits.length; i += 1){
  for (let j = 0; j < cardNum.length; j += 1){
    fullDeck.cards.push(new Cards(suits[i], cardNum[j], j));
  }
}
console.log(fullDeck)

//shuffle deck

//distribute 2 decks

//compare cards
  //if p1 wins
    //take both cards
  //if p2 wins
    //take both cards
  //tie condition
    //skip 3 cards

    

