
let hover = document.querySelectorAll('li');

function home (){
    for(let i = 0;i<hover.length;i++){
        hover[i].style.backgroundColor = 'lightgray'
    }
}

  hover.addEventListener('mouseover',home);
