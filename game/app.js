let charecter = document.getElementById('charecter');
let block = document.getElementById('block');
let score = document.querySelector('h3 span');
let playBtn = document.getElementById('playBtn');
let bestScore = document.querySelector('h2 span');
let gameOver = document.getElementById('gameOver');
let newBest = document.getElementById('newBest');
let gameField = document.getElementById('game');
let genderField = document.getElementById('genderField');
let change;
newBest.style.display = 'none';
gameOver.style.display = 'none';
if (localStorage.getItem('best')) {
    bestScore.textContent = localStorage.getItem('best');
}

let gender = document.querySelector('select');

document.querySelector('select').onchange = function() {
    console.log(gender.value);
    if (gender.value == 'male') {
        charecter.style.backgroundImage = "url('/images/player.png')";
    }else{
        charecter.style.backgroundImage = "url('/images/princes.png')";
    }
  }

addEventListener('click', () => {
    if (charecter.classList != 'jump' && playBtn.style.display == 'none') {
        charecter.classList.add('jump');
        let scoreValue = parseInt(score.textContent) + 15;

    score.textContent = scoreValue;
    }
      setTimeout(function(){
          charecter.classList.remove('jump');
      }, 500);
});

addEventListener('keydown',(e) => {
  if(e.keyCode == 69 && playBtn.style.display == 'none'){
      let charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
      let pow = document.createElement('div');
      pow.classList.add('powerBall');
      pow.style.top = charecterTop + 5 + "px";
      gameField.appendChild(pow);
      pow.classList.add('shoot');

      setTimeout(function(){
        gameField.removeChild(pow);
      },500);
      
  }
});

playBtn.addEventListener('click',() => {
    block.classList.add('move');
    playBtn.style.display = 'none';
    gameOver.style.display = 'none';
    newBest.style.display = 'none';
    genderField.style.display = 'none';

    change = setInterval(function(){
        let rnd = getRandomArbitrary();
        if (rnd == 1) {
            block.style.backgroundImage = "url('/images/bush.png')";
            block.style.height = '40px';
            block.style.width = '40px';
        }else if(rnd == 2){
            block.style.backgroundImage = "url('/images/plant.png')";
            block.style.height = '20px';
            block.style.width = '20px';
        }else{
            block.style.backgroundImage = "url('/images/rock.png')";
            block.style.height = '25px';
            block.style.width = '25px';
        }
    },1000);
});
var checkLive = setInterval(function(){
    if (block.classList != 'move') {
        return
    }
    let charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (charecterTop <= 450 && charecterTop > 430 && blockLeft > 50 && blockLeft < 70) {
        block.classList.remove('move');
        playBtn.style.display = 'inline';
        gameOver.style.display = 'block';
        genderField.style.display = 'inline';
        clearInterval(change);

        let scoreValue = parseInt(score.textContent);
        let bestScoreValue = parseInt(bestScore.textContent);

        if (bestScoreValue < scoreValue) {
            bestScore.textContent = scoreValue;
            localStorage.setItem('best',scoreValue);
            newBest.style.display = 'inline';
        }
        
        score.textContent = 0;
    }
},10);

function getRandomArbitrary() {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }