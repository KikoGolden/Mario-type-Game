export const scoreChecker = () => {
    let charecter = document.getElementById('charecter');
    let bestScore = localStorage.getItem('best')
    let type = localStorage.getItem('skin');
    let newCharWrapper = document.getElementById('newCharecterWrapper');
    let charecterType = document.getElementById('newCharecter');
    let textType = document.querySelector('#newCharecterText h2');
    let gender = document.querySelector('select');
 
    if ( bestScore >= 1500 && type != 'horror') {
       newCharWrapper.style.display = 'inline';

       if (gender.value == 'male') {
        charecter.style.backgroundImage = "url('/images/player-scary.png')";
        charecterType.style.backgroundImage = "url('/images/player-scary.png')";
       }else{
        charecter.style.backgroundImage = "url('/images/princes-scary.png')";
        charecterType.style.backgroundImage = "url('/images/princes-scary.png')";
       }
     
     textType.innerHTML = 'New Charecter Unlocked!<br>1500 Points Reached';
     localStorage.setItem('skin', 'horror');
     setTimeout(hideEffect,3500);
     setTimeout(hideAfter, 4500);

 }else if (bestScore >= 1000 && bestScore < 1500 && type != 'strong') {
   newCharWrapper.style.display = 'inline';
    
    if (gender.value == 'male') {
      charecter.style.backgroundImage = "url('/images/player-strong.png')";
    charecterType.style.backgroundImage = "url('/images/player-strong.png')";
     }else{
      charecter.style.backgroundImage = "url('/images/princes-strong.png')";
    charecterType.style.backgroundImage = "url('/images/princes-strong.png')";
     }

    textType.innerHTML = 'New Charecter Unlocked!<br>1000 Points Reached';
    localStorage.setItem('skin', 'strong');
    setTimeout(hideEffect,3500);
     setTimeout(hideAfter, 4500);

 }else if (bestScore >= 500 && bestScore < 1000 && type != 'cool') {
   newCharWrapper.style.display = 'inline';
    
    if (gender.value == 'male') {
      charecter.style.backgroundImage = "url('/images/player-cool.png')";
    charecterType.style.backgroundImage = "url('/images/player-cool.png')";
     }else{
      charecter.style.backgroundImage = "url('/images/princes-cool.png')";
    charecterType.style.backgroundImage = "url('/images/princes-cool.png')";
     }

    textType.innerHTML = 'New Charecter Unlocked!<br>500 Points Reached';
    localStorage.setItem('skin', 'cool');
    setTimeout(hideEffect,3500);
     setTimeout(hideAfter, 4500);
 }
 function hideEffect(){
   textType.classList.add('fadeOut');
   charecterType.classList.add('fadeOut');
 }

 function hideAfter(){
   newCharWrapper.style.display = 'none';
   textType.classList.remove('fadeOut');
   charecterType.classList.remove('fadeOut');
}
};

