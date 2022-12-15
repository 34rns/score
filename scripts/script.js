// main funtion for variable scoping
(function () {
    


//  -------------- all function ------------- 

function winner(oldScore,wScore) {
    if (oldScore === wScore) {
        gameOver = true;
        if (p1Score === wScore) {
            pOne.classList.add('winner')
            p1Name.classList.add('winner')
        } else {
            pTwo.classList.add('winner')
            p2Name.classList.add('winner')
        }
       pOneBtn.setAttribute('disabled', 'disabled');
       pTwoBtn.setAttribute('disabled', 'disabled');
   } 
}

function reset() {
    p1Score = 0
    p2Score = 0
    gameOver = false
    pOne.textContent = p1Score;
    pTwo.textContent = p2Score;
    pOneBtn.removeAttribute('disabled')
    pTwoBtn.removeAttribute('disabled')
    pTwo.classList.remove('winner')
    pOne.classList.remove('winner')
    p1Name.classList.remove('winner')
    p2Name.classList.remove('winner')
}

// ----------------  all addEventListener ------------



pOneBtn.addEventListener('click', () =>{
   
    if (!gameOver) {
        p1Score ++;
        winner(p1Score, wScore);
         pOne.textContent = p1Score;
        }
} );

pTwoBtn.addEventListener('click', () =>{
if (!gameOver) {
    p2Score ++;
     winner(p2Score, wScore);
     pTwo.textContent = p2Score;
}
} );

rBtn.addEventListener('click', reset)

iScore.addEventListener('change', () => {
    wScore= Number(iScore.value)
    wDisScore.textContent = wScore
    iScore.value = '';
    reset()
})






















//........................    EXERCISE GAME - 01 END   .......................



})();