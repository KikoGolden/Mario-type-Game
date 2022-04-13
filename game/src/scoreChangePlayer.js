export const scoreChecker = () => {
    let charecter = document.getElementById('charecter');
    let bestScore = localStorage.getItem('best')
    let type = localStorage.getItem('skin');
 
    if ( bestScore >= 1500 && type != 'horror') {
     alert('Ulocked new charecter');
     charecter.style.backgroundImage = "url('/images/player-scary.png')";
     localStorage.setItem('skin', 'horror');

 }else if (bestScore >= 1000 && bestScore < 1500 && type != 'strong') {
    alert('Ulocked new charecter');
    charecter.style.backgroundImage = "url('/images/player-strong.png')";
    localStorage.setItem('skin', 'strong');

 }else if (bestScore >= 500 && bestScore < 1000 && type != 'cool') {
    alert('Ulocked new charecter');
    charecter.style.backgroundImage = "url('/images/player-cool.png')";
    localStorage.setItem('skin', 'cool');
 }
};