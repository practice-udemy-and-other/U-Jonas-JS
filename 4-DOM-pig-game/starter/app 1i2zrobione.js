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

/* 
1. html ja mam jakieś dziwne rzeczy, których nie czaję. 
2.  cssy do zrobienia żeby to wyglądąo sensownie, 
3. klasa nie id, 
4. zrobił, że można zmieniac w trakcie gry, ja nie. 
Można by zrobić zawnętrzną funkcję i wkłądac ją w dowolne miejsce w zależności od chęci
5. default value żeby mi się wyświetało w moim htmlu spróbować
*/

var scores, roundScore, activePlayer, gamePlaying, winScore, lastDice, defaultValue;
defaultValue = 15; // ustawiłem na zewnątrz żeby móc wyświetlić w html

init();

function init() {
    var setWinningNo = document.getElementById('winningNo').value;
    if (setWinningNo) { // if empty -> falsy value -> else (default value). If not set winScore as setWinningNo
        winScore = setWinningNo;
    } else {
        winScore = defaultValue;
    }
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
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

function setByIdTo(id, text) {
    document.getElementById(id).textContent = text; 
}

function removeClass(player, clss)  {
    document.querySelector(`.player-${player}-panel`).classList.remove(clss);
}
//  var lastDice = 0; // czy w dobrym miejscu? chodziło mi o to by był dostęp do tej zmiennej jak drugi raz wywoła się funkcję rzucając kość
// document.querySelector('.btn-roll').addEventListener('click', function() {
//     if(gamePlaying) {
//    
//         // 1. Random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//
//         //2. Display the result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = `dice-${dice}.png`;
//
//
//         //3. Update the round score IF the rolled number was NOT a 1
//         console.log('lastDice:', lastDice, ', dice:', dice, ', scores[activePlayer]:', scores[activePlayer],  ', roundScore:', roundScore);
//         //console.log({'lastDice': lastDice, 'dice': dice, 'scores[activePlayer]': scores[activePlayer],  'roundScore': roundScore});
//
//         if (lastDice === 6 && dice === 6) {
//             // console.log('activePlayer:', activePlayer, 'scores[activePlayer]:', scores[activePlayer])
//             scores[activePlayer] = 0;
//             document.querySelector(`#score-${activePlayer}`).textContent = 0;
//             // console.log('activePlayer:', activePlayer, 'scores[activePlayer]:', scores[activePlayer])
//             nextPlayer();
//         } else {
//             lastDice = dice;
//             if (dice !== 1) {
//                 //Add score
//                 roundScore += dice;
//                 document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
//             } else {
//                 //Next player
//                 nextPlayer();
//             }
//         }
//     }    
// });

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = `dice-${dice}.png`;

        // 2a. If 2x6 in a row - reset whole score AND next player
        // console.log('lastDice:', lastDice, ', dice:', dice, ', scores[activePlayer]:', scores[activePlayer],  ', roundScore:', roundScore);
        //console.log({'lastDice': lastDice, 'dice': dice, 'scores[activePlayer]': scores[activePlayer],  'roundScore': roundScore});
        // if (lastDice === 6 && dice === 6) {
        //     // console.log('activePlayer:', activePlayer, 'scores[activePlayer]:', scores[activePlayer])
        //     scores[activePlayer] = 0;
        //     document.querySelector(`#score-${activePlayer}`).textContent = '0';
        //     // console.log('activePlayer:', activePlayer, 'scores[activePlayer]:', scores[activePlayer])
        //     nextPlayer();

        //     //3. Update the round score IF the rolled number was NOT a 1 (and next player)
        // } else 
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
        // update previous roll
        //lastDice = dice;
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
            document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';
    lastDice = 0
}

document.querySelector('.btn-new').addEventListener('click', init);