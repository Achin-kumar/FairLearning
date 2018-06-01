let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];



function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        
            deck.push(values[valueIdx] + " of " + suits[suitIdx])
        }
    }
    return deck;
}


let deck= createDeck();

function showStatus(){
    if(!gameStarted){
    text.innerText = 'Welcome to Blackjack!';
    return;
    }
}

let index=(function cardIndex() {
    let num = Math.trunc(Math.random() * deck.length);
  return num;
})();

console.log(deck[index]);