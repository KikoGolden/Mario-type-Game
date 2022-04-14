import {skinPicker} from './skinChange.js';
import {skinHitted} from './skinChange.js';

export const badConnectedFuncs = () => {
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
    let stamina = document.getElementById('stamina');
    let staminaField = document.getElementById('stamina-wrapper');
    let gender = document.querySelector('select');
    let coinField = document.querySelector('#coins');
    let buySnow = document.getElementById('BuySnow');
    let buyJungle = document.getElementById('BuyJungle');
    let buyLake = document.getElementById('BuyLake');
    let buyMagic = document.getElementById('BuyMagic');
    let shop = document.getElementById('shop');
    let jungleT = document.getElementById('jt');
    let magicL = document.getElementById('ml');
    let snowH = document.getElementById('sh');
    let dreamL = document.getElementById('dl');
    
    let bioms = [];
    
    let coins = 0;
    let health;
    let change;
    let lives;
    
    let isSame = false;
    let beganShooting = false;
    let isSpawned = false;
    let hasWon = false;
    
    newBest.style.display = 'none';
    bossText.style.display = 'none';
    bossHealth.style.display = 'none';
    staminaField.style.display = 'none';
    
    
    
    if (localStorage.getItem('bioms')) {
        bioms = Array.from(localStorage.getItem('bioms'));
    }
    if (localStorage.getItem('best')) {
        bestScore.textContent = localStorage.getItem('best');
    }
    if (localStorage.getItem('coins')) {
        coins = parseInt(localStorage.getItem('coins'));
        coinField.textContent = coins;
    }
    if (localStorage.getItem('biom')) {
        if (localStorage.getItem('biom') == 'ml') {
         gameField.style.backgroundImage = "url('https://animesher.com/orig/1/132/1323/13234/animesher.com_paysage-gif-waterfall-1323423.gif')";
         buyMagic.style.display = 'none';
         buyMagic.parentElement.classList.add('selected');
        }else if (localStorage.getItem('biom') == 'sh') {
            gameField.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2205e2c-52eb-46b3-89fb-bd0fd5da780e/dbyn08r-83e1c070-bfa6-48da-ae25-b7d7409639fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMjA1ZTJjLTUyZWItNDZiMy04OWZiLWJkMGZkNWRhNzgwZVwvZGJ5bjA4ci04M2UxYzA3MC1iZmE2LTQ4ZGEtYWUyNS1iN2Q3NDA5NjM5ZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pFhMtU06SUSgNo6CA5fLFNJlv9h69s9oE89E2E6iAGk')";
            buySnow.style.display = 'none';
            buySnow.parentElement.classList.add('selected');
        }else if (localStorage.getItem('biom') == 'jt') {
            gameField.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/037/263/051/original/karina-formanova-rainforest-animation.gif?1619929364&dl=1')";
            buyJungle.style.display = 'none';
            buyJungle.parentElement.classList.add('selected');
        }else if (localStorage.getItem('biom') == 'dl') {
            gameField.style.backgroundImage = "url('https://64.media.tumblr.com/1d66e14149c1555d02d70cd5f9b637ef/tumblr_pi3lxeuBdf1wrsp5w_540.gifv')";
            buyLake.style.display = 'none';
            buyLake.parentElement.classList.add('selected');
        }
    }
    
    if (localStorage.getItem('buyedJT')) {
        buyJungle.style.display = 'none';
    }
    
    if (localStorage.getItem('buyedDL')) {
        buyLake.style.display = 'none';
    }
    
    if (localStorage.getItem('buyedML')) {
        buyMagic.style.display = 'none';
    }
    
    if (localStorage.getItem('buyedSH')) {
        buySnow.style.display = 'none';
    }
    
    jungleT.addEventListener('click', () => {
      if (localStorage.getItem('buyedJT')) {
        buyJungle.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
        buyJungle.parentElement.classList.add('selected');
        gameField.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/037/263/051/original/karina-formanova-rainforest-animation.gif?1619929364&dl=1')";
        localStorage.setItem('biom', 'jt');
      }
    });
    dreamL.addEventListener('click', () => {
        if (localStorage.getItem('buyedDL')) {
          buyLake.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
          buyLake.parentElement.classList.add('selected');
          gameField.style.backgroundImage = "url('https://64.media.tumblr.com/1d66e14149c1555d02d70cd5f9b637ef/tumblr_pi3lxeuBdf1wrsp5w_540.gifv')";
          localStorage.setItem('biom', 'dl');
        }
    });
    snowH.addEventListener('click', () => {
        if (localStorage.getItem('buyedSH')) {
          buySnow.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
          buySnow.parentElement.classList.add('selected');
          gameField.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2205e2c-52eb-46b3-89fb-bd0fd5da780e/dbyn08r-83e1c070-bfa6-48da-ae25-b7d7409639fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMjA1ZTJjLTUyZWItNDZiMy04OWZiLWJkMGZkNWRhNzgwZVwvZGJ5bjA4ci04M2UxYzA3MC1iZmE2LTQ4ZGEtYWUyNS1iN2Q3NDA5NjM5ZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pFhMtU06SUSgNo6CA5fLFNJlv9h69s9oE89E2E6iAGk')";
          localStorage.setItem('biom', 'sh');
        }
    });
    magicL.addEventListener('click', () => {
        if (localStorage.getItem('buyedML')) {
            buyMagic.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
            buyMagic.parentElement.classList.add('selected');
            gameField.style.backgroundImage = "url('https://animesher.com/orig/1/132/1323/13234/animesher.com_paysage-gif-waterfall-1323423.gif')";
            localStorage.setItem('biom', 'ml');
          }
    });
    
    //GENDER CHECK
    document.querySelector('select').onchange = function() {
        console.log(gender.value);
        if (gender.value == 'male') {
            charecter.style.backgroundImage = "url('/images/player.png')";
            
            skinPicker();
        }else{
            charecter.style.backgroundImage = "url('/images/princes.png')";
        }
      }
    
    
    //Buy lands
    
    //Magic Land
     buyMagic.addEventListener('click', () => {
        if (coins >= 100) {
        gameField.style.backgroundImage = "url('https://animesher.com/orig/1/132/1323/13234/animesher.com_paysage-gif-waterfall-1323423.gif')";
        buyMagic.style.display = 'none';
        coins -= 100;
        localStorage.setItem('coins', coins);
        coinField.textContent = coins;
        buyMagic.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
        buyMagic.parentElement.classList.add('selected');
        localStorage.setItem('biom', 'ml');
        localStorage.setItem('buyedML', 'yes');
        }
    });
     //Snow Hut
     buySnow.addEventListener('click', () => {
        if (coins >= 150) {
        gameField.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2205e2c-52eb-46b3-89fb-bd0fd5da780e/dbyn08r-83e1c070-bfa6-48da-ae25-b7d7409639fe.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyMjA1ZTJjLTUyZWItNDZiMy04OWZiLWJkMGZkNWRhNzgwZVwvZGJ5bjA4ci04M2UxYzA3MC1iZmE2LTQ4ZGEtYWUyNS1iN2Q3NDA5NjM5ZmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pFhMtU06SUSgNo6CA5fLFNJlv9h69s9oE89E2E6iAGk')";
        buySnow.style.display = 'none';
        coins -= 150;
        localStorage.setItem('coins', coins);
        coinField.textContent = coins;
        buySnow.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
        buySnow.parentElement.classList.add('selected');
        localStorage.setItem('biom', 'sh');
        bioms.push('sh');
        localStorage.setItem('buyedSH', 'yes');
        }
    });
    //Jungle Temple
    buyJungle.addEventListener('click', () => {
        if (coins >= 200) {
        gameField.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/037/263/051/original/karina-formanova-rainforest-animation.gif?1619929364&dl=1')";
        buyJungle.style.display = 'none';
        coins -= 200;
        localStorage.setItem('coins', coins);
        coinField.textContent = coins;
        buyJungle.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
        buyJungle.parentElement.classList.add('selected');
        localStorage.setItem('biom', 'jt');
        localStorage.setItem('buyedJT', 'yes');
        }
    });
    //Dream Lake
    buyLake.addEventListener('click', () => {
        if (coins >= 250) {
        gameField.style.backgroundImage = "url('https://64.media.tumblr.com/1d66e14149c1555d02d70cd5f9b637ef/tumblr_pi3lxeuBdf1wrsp5w_540.gifv')";
        buyLake.style.display = 'none';
        coins -= 250;
        localStorage.setItem('coins', coins);
        coinField.textContent = coins;
        buyLake.parentElement.parentElement.querySelectorAll('article').forEach(x => x.classList.remove('selected'));
        buyLake.parentElement.classList.add('selected');
        localStorage.setItem('biom', 'dl');
        localStorage.setItem('buyedDL', 'yes');
        }
    });
    
    //JUMP CLICK MOUSE FUNC
    addEventListener('click', () => {
        if (charecter.classList != 'jump' && playBtn.style.display == 'none') {
            charecter.classList.add('jump');
            let scoreValue = parseInt(score.textContent) + 15;
            
            if (scoreValue > 500) {
                let boss = document.createElement('div');
                boss.classList.add('boss');
                 block.classList.remove('move');
                 block.classList.add('cloudShoot');
    
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
    
    //SHOOT CLICK E FUNC
    addEventListener('keydown',(e) => {
      if(e.keyCode == 69 && playBtn.style.display == 'none'){
    
        if (stamina.value < 10) {
            return;
        }
    
          let charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
          let pow = document.createElement('div');
          pow.classList.add('powerBall');
          pow.style.top = charecterTop + 5 + "px";
          if (gender.value == 'female') {
              pow.style.backgroundImage = "url('/images/candyball.png')"
          }
          gameField.appendChild(pow);
          pow.classList.add('shoot');
          stamina.value -= 10;
       
          if (isSpawned && beganShooting) {
            let scoreValue = parseInt(score.textContent) + 25;
            score.textContent =scoreValue;
              setTimeout(function(){
                gameField.removeChild(pow);
                health -= 5;
                bossHealth.value = health;
    
                let boss = bossPlace.querySelector('div');
                boss.style.backgroundImage = "url('/images/shisha_boss-hitted.png')";
    
                setTimeout(function(){
                    boss.style.backgroundImage = "url('/images/shisha_boss-showing.png')";
                },200);
                
                //if boss dies
                if (health == 0) {
                    coins += 50;
                    localStorage.setItem('coins', coins);
                    coinField.textContent = coins;
    
                    staminaField.style.display = 'none'; 
                    hasWon = true;
    
                    let scoreValue = parseInt(score.textContent);
                    let bestScoreValue = parseInt(bestScore.textContent);
             
                    if (bestScoreValue < scoreValue) {
                     bestScore.textContent = scoreValue;
                     localStorage.setItem('best',scoreValue);
                     newBest.style.display = 'inline';
                    }
                    score.textContent = 0;
    
                    winField.innerHTML = `<img src="/images/win.gif" alt="" style="width: 100%; z-index: 1000; position: absolute;top: 0">`;
                      setTimeout(function(){
                        winField.innerHTML='';
                        block.classList.remove('cloudShoot');
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
    
    //PLAY BUTTON FUNC
    playBtn.addEventListener('click',() => {
    
        //hearts
        let heart3 = document.getElementById('heart-3').src = '/images/full-heart.png';
        let heart2 = document.getElementById('heart-2').src = '/images/full-heart.png';
        let heart1 = document.getElementById('heart-1').src = '/images/full-heart.png';
    
        lives = 3;
    
        winField.innerHTML='';
        bossPlace.innerHTML = '';
        block.classList.add('move');
        playBtn.style.display = 'none';
        gameOver.style.display = 'none';
        newBest.style.display = 'none';
        genderField.style.display = 'none';
        bossHealth.style.display = 'none';
        staminaField.style.display = 'inline';
        shop.style.visibility = 'hidden';
    
        health = 100;
        bossHealth.value = 100;
        stamina.value = 100;
    
        hasWon = false;
    
        change = setInterval(function(){
            isSame = false;
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
    
    //COLLISION CHECKER
    var checkLive = setInterval(function(){
        if (block.classList != 'move' && block.classList != 'cloudShoot') {
            return;
        }
        let charecterTop = parseInt(window.getComputedStyle(charecter).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
        if (charecterTop <= 450 && charecterTop > 430 && blockLeft > 50 && blockLeft < 70 && !isSame) {
    
            if (gender.value == 'male') {
                charecter.style.backgroundImage = "url('/images/player_hitted.png')";
                skinHitted();
            }else{
                charecter.style.backgroundImage = "url('/images/princes_hitted.png')";
            }
    
            setTimeout(function(){
                if (gender.value == 'male') {
                    charecter.style.backgroundImage = "url('/images/player.png')";
                skinPicker();
                }else{
                    charecter.style.backgroundImage = "url('/images/princes.png')";
                }
            },200);
    
            lives -= 1;
            
            if (lives != 0) {
                isSame = true;
                if (lives == 2) {
                    let heart3 = document.getElementById('heart-3').src = '/images/empty-heart.png';
                }else{
                    let heart2 = document.getElementById('heart-2').src = '/images/empty-heart.png';
                }
                return;
            }
            
            playBtn.style.display = 'inline';
            genderField.style.display = 'inline';
            clearInterval(change);
    
            if (hasWon) {
                gameOver.textContent = 'You Have Won!';
                bossPlace.innerHTML = '';
                bossHealth.style.display = 'none';
            }else{
                gameOver.textContent = 'Game Over!';
            }
            
            gameOver.style.display = 'block';
            shop.style.visibility = 'visible';
            let scoreValue = parseInt(score.textContent);
            let bestScoreValue = parseInt(bestScore.textContent);
    
            if (bestScoreValue < scoreValue) {
                bestScore.textContent = scoreValue;
                localStorage.setItem('best',scoreValue);
                newBest.style.display = 'inline';
            }
            staminaField.style.display = 'none';
            isSpawned = false;
            beganShooting = false;
            score.textContent = 0;
            block.classList.remove('cloudShoot');
            block.classList.remove('move');
        }
    },10);
    
    //STAMINA RELOADER
    let staminaReload = setInterval(function(){
        if (stamina.value !== 100) {
            stamina.value += 1;
        }
    },140);
    
    //GET RND 
    function getRandomArbitrary() {
        return Math.floor(Math.random() * (4 - 1) + 1);
      }
};