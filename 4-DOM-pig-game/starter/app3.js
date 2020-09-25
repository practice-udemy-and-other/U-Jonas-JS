/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/ /*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores, roundScore, activePlayer, gamePlaying, winScore;
winScore = 40;
init();

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    setDiceDisplay('none'); // czy za pomocą HTML DOM querySelectorAll() Method i map można zmienić wsystko?
    setByIdTo('score-0', '0');
    setByIdTo('score-1', '0');
    setByIdTo('current-0', '0');
    setByIdTo('current-1', '0');
    setByIdTo('name-0', 'Player 1')
    setByIdTo('name-1', 'Player 2')
    removeClass(0, 'winner');
    removeClass(1, 'winner');
    removeClass(0, 'active');
    removeClass(1, 'active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function setDiceDisplay(setTo) {
    document.getElementById('dice-0').style.display = setTo;
    document.getElementById('dice-1').style.display = setTo;
}

function setByIdTo(id, text) {
    document.getElementById(id).textContent = text; 
}

function removeClass(player, clss)  {
    document.querySelector(`.player-${player}-panel`).classList.remove(clss);
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-0').src = `dice-${dice0}.png`;
        document.getElementById('dice-1').src = `dice-${dice1}.png`;
        setDiceDisplay('block');


        //3. Update the round score IF the rolled number was NOT a 1
        // czy min 1  czy dokładnie 1 zeruje, uznaje póki co że min 1 
        if (dice0 !== 1 && dice1 !== 1) {
            //Add score
            roundScore += (dice0 + dice1);
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winScore) {
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            setDiceDisplay('none');
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next player
    activePlayer = (activePlayer + 1) % 2;
    roundScore = 0;

    setByIdTo('current-0', '0');
    setByIdTo('current-1', '0');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    setDiceDisplay('none');
}

document.querySelector('.btn-new').addEventListener('click', init);