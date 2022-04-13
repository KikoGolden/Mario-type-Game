
let charecter = document.getElementById('charecter');
let gender = document.querySelector('select');

export const skinPicker = () => {
if (localStorage.getItem('skin')) {
    let type = localStorage.getItem('skin');

    if (gender.value == 'male') {
        if (type == 'horror') {
            charecter.style.backgroundImage = "url('/images/player-scary.png')";
        }else if(type == 'strong') {
            charecter.style.backgroundImage = "url('/images/player-strong.png')";
        }else if(type == 'cool') {
            charecter.style.backgroundImage = "url('/images/player-cool.png')";
        } 
    }else{
        //todo
    }
    
}

}


export const skinHitted = () => {
    if (localStorage.getItem('skin')) {
        let type = localStorage.getItem('skin');
    
        if (gender.value == 'male') {
            if (type == 'horror') {
                charecter.style.backgroundImage = "url('/images/player-scary-hitted.png')";
            }else if(type == 'strong') {
                charecter.style.backgroundImage = "url('/images/player-strong-hitted.png')";
            }else if(type == 'cool') {
                charecter.style.backgroundImage = "url('/images/player-cool-hitted.png')";
            } 
        }else{
            //todo
        }
        
    }
    
    }