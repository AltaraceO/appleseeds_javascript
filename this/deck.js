function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }

  return deck;
}

function drawCard(deck) {
  return deck.pop();
}
const myDeck = makeDeck();

const cardOne = drawCard(myDeck);

//!Making this a function that will return an object means I can make more instances of the deck
const mainDeckObj = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const { suits, values, deck } = this;
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
    },
    drawSingleCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultipleCards(number) {
      const cards = [];
      for (let i = 0; i < number; i++) {
        cards.push(this.drawSingleCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      //*loop backwards over the cards
      for (let i = deck.length - 1; i > 0; i--) {
        //*Pick random index before the current element
        let j = Math.floor(Math.random() * (i + 1));
        //*Swap the elements, this is a kind of destructure way of swapping
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

//!New instance of the deck
const deckFunc = mainDeckObj();
deckFunc.initializeDeck();
deckFunc.shuffle();
deckFunc.drawSingleCard();
deckFunc.drawSingleCard();
deckFunc.drawMultipleCards(5);

console.log(deckFunc);
