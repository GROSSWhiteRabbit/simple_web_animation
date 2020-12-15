
(function(){
    const btn = document.querySelector('.btn3'),
    elem = document.querySelector('.box');  
    let pos = 0;


    function myAnimation() {
    pos+= 3;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
    }

    btn.addEventListener('click', () => {
        pos = 0;
        elem.style.top = "0px";
        elem.style.left = '0px';
    
        requestAnimationFrame(myAnimation)
    });

    
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);
})()



