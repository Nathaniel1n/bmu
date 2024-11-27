let list = document.querySelector('.slider.list');
let items = document.querySelector('.slider. list .iterm');
let dots = document.querySelector('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
   
let active =0;
let lengthItems = iterms.length;

next.onclick = function(){
    if(active  + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
function reloadSlider(){
    let checkLeft = iterms[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

let lastActiveDot = document.querySelector('slider .dots li.active');
lastActiveDot.classList.remove('active');
dots[active].classList.add('active'); 