// Deck.js
import Card from "./Card";
import { shuffle } from "lodash-es";

class Deck {

  #cards = [];
  
  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  createFullDeck() {
    this.values.forEach((v) => {
      this.suits.forEach((s) => {
        this.#cards.push(new Card(v, s));
      });
    });
    return this;
  }

  shuffle() {
    this.#cards = shuffle(this.#cards);
    return this;
  }

  displayCards() {
    this.#cards.forEach((c) => {
      c.display();
    });
    return this;
  }
}

export default Deck;