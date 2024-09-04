'use strict';
const score0El = document.querySelector('#score--0');
const score0E2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player0E2 = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new')





//Starting condition
score0El.textContent = 0;
score0E2.textContent = 0;
diceEl.classList.add('hidden');

let playing = true;
let currentScore = 0;
let activePlayer = 0;
const score = [0,0]


const SwitchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player0E2.classList.toggle('player--active')

}



// Rolling the dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){

        // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1
    


    // 2.Displaying the dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1
     if(dice !== 1){
        // And dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

     }
     else{
        SwitchPlayer();
     }

    }
})

btnHold.addEventListener('click', function(){

    if(playing){

    // Add current score to active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    // If player's score >=100
    if(score[activePlayer] >=20){
        // Finsish the game
        playing = false;
    

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active')

    }else{
        SwitchPlayer();
    }
}
})


btnNew.addEventListener('click',function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    diceEl.classList.add('hidden');
    document.getElementById(`current--${activePlayer}`).textContent = 0
    score0El.textContent = 0;
    score0E2.textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    btnRoll();
    btnHold();


})
