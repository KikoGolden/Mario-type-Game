let charecter = document.getElementById('charecter');
let block = document.getElementById('block');
let score = document.querySelector('h3 span');
let playBtn = document.getElementById('playBtn');
let bestScore = document.querySelector('h2 span');
let gameOver = document.getElementById('gameOver');
let newBest = document.getElementById('newBest');
let gameField = document.getElementById('game');
let genderField = document.getElementById('genderField');
let bossPlace = document.getElementById('bossPlace');
let bossText = document.getElementById('textBoss');
let bossHealth = document.getElementById('health');
document.getElementById('winField');
let health;
let change;
let beganShooting = false;
let isSpawned = false;
let hasWon = false;
newBest.style.display = 'none';
gameOver.style.display = 'none';
bossText.style.display = 'none';
bossHealth.style.display = 'none';
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

        if (scoreValue > 500) {
            let boss = document.createElement('div');
            boss.classList.add('boss');

            if (!isSpawned && health == 100) {
            }


            if (!isSpawned && health == 100) {
                bossText.style.display = 'block';
                block.style.display = 'none';
                setTimeout(() =>{
                    
                    bossHealth.style.display = 'inline';
                    bossText.style.display = 'none';
                    bossPlace.appendChild(boss);
                    beganShooting = true;
                    block.style.display = 'block';
                },2000);

                isSpawned = true;
            }
       }

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

 
      if (isSpawned && beganShooting) {
        let scoreValue = parseInt(score.textContent) + 25;
        score.textContent =scoreValue;
          setTimeout(function(){
            gameField.removeChild(pow);
            health -= 5;
            bossHealth.value = health;
            if (health == 0) {
                hasWon = true;
                winField.innerHTML = `<img src="/images/win.gif" alt="" style="width: 100%; z-index: 1000; position: absolute;top: 0">`;
                  
                  setTimeout(function(){
                    winField.innerHTML='';
            
                  },7000)
              }
          },460);
          bossHealth.value = health;
          
      }else{

      setTimeout(function(){
        gameField.removeChild(pow);
      },500);
    }
      
  }
});

playBtn.addEventListener('click',() => {
    winField.innerHTML='';
    bossPlace.innerHTML = '';
    block.classList.add('move');
    playBtn.style.display = 'none';
    gameOver.style.display = 'none';
    newBest.style.display = 'none';
    genderField.style.display = 'none';
    bossHealth.style.display = 'none';
    health = 100;
    bossHealth.value = 100;
    hasWon = false;

    change = setInterval(function(){
        let rnd = getRandomArbitrary();
        if (isSpawned) {
            block.style.backgroundImage = "url('/images/smoke.png')";
        }else if (rnd == 1) {
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

    if (charecterTop <= 450 && charecterTop > 430 && blockLeft > 50 && blockLeft < 70 ) {
        block.classList.remove('move');
        playBtn.style.display = 'inline';
        genderField.style.display = 'inline';
        clearInterval(change);

        if (hasWon) {
            gameOver.textContent = 'You Have Won!';
        }else{
            gameOver.textContent = 'Game Over!';
        }
        
        gameOver.style.display = 'block';

        let scoreValue = parseInt(score.textContent);
        let bestScoreValue = parseInt(bestScore.textContent);

        if (bestScoreValue < scoreValue) {
            bestScore.textContent = scoreValue;
            localStorage.setItem('best',scoreValue);
            newBest.style.display = 'inline';
        }
        
        isSpawned = false;
        beganShooting = false;
        score.textContent = 0;
    }
},10);

function getRandomArbitrary() {
    return Math.floor(Math.random() * (4 - 1) + 1);
  }