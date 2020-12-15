'use strict';
(function(){
    const btn = document.querySelector('.btn1'),
    box = document.querySelector('.box');


function myAnimation(elem) {
let pos = 0;

const id = setInterval(frame, 10);
function frame() {
    if (pos == 300) {
        clearInterval(id);
    } else {
        pos+= 3;
        elem.style.top = pos + "px";
        elem.style.left = pos + 'px';
    }
}
}

btn.addEventListener('click', () => {
    
    box.style.top = "0px";
    box.style.left = '0px';
setTimeout(myAnimation, 500, box);
});
})()


