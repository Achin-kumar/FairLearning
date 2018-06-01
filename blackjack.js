
/*Html Edits*/

//Dom Variables
let text = document.getElementById('text'),
    startBtn = document.getElementById('startBtn'),
    hitBtn = document.getElementById('hitBtn'),
    stayBtn = document.getElementById('stayBtn');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

/*Game Start Events*/
startBtn.addEventListener('click', function () {
    gameStarted = 'true';
    gameOver = 'false';
    playerWon = 'false';

    deck = createDeck();
    shuffleDeck(deck);
    playerCards = [randomCard(), randomCard()];
    dealerCards = [randomCard(), randomCard()];

    startBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
    showStatus();
});



/*--------- Game Details---------- */


//Cards
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

/*Create Deck */
function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suits: suits[suitIdx],
                values: values[valueIdx]
            };
            deck.push(card);
            // deck.push(values[valueIdx] + " of " + suits[suitIdx])
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardNumericValue(card) {
    switch (card.values) {
        case 'Ace':
            return 1;
        case 'two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'nine':
            return 9;
        default:
            return 11;

    }
}
// function getScore(cardArray){
//     let score =0;
//     let hasAce=false;
for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
        hasAce = true;
    }
}
if (hasAce && score + 10 <= 21) {
    return score + 10;
}
return score;
// }
function getCardString(card) {
    return card.suits + " of " + cards.values;
}




function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function showStatus() {
    if (!gameStarted) {
        text.innerText = 'Welcome to Blackjack!';
        return;
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardsString += dealerCards[i] + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsString += playerCards[i] + '\n';
    }

    updateScores();

    text.innerText = 'Dealer has : ' + dealerCardString + ' (score : ' + dealerScore + ')\n\n' +
        'Player has : ' + playerCardString + ' (score : ' + playerScore + ')\n\n';


    if (gameOver) {
        if (playerWon) {
            text.innerText += 'You Win';
        }
        else {
            text.innerText += 'Dealer Wins';
        }
        startBtn.style.display = 'inline';
        hitBtn.style.display = 'none';
        stayBtn.style.display = 'none';
    }

}
function cardIndex() {
    let num = Math.trunc(Math.random() * deck.length);
    return num;
}
function randomCard() {
    let card = deck[cardIndex()];
    return card;
}

// let index=(function cardIndex() {
//     let num = Math.trunc(Math.random() * deck.length);
//   return num;
// })();
