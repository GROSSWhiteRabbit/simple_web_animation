
(function(){
    const btn = document.querySelector('.btn3'),
    elem = document.querySelector('.box');  
    let pos = 0;


    function myAnimation() {
    pos+= 3;
    elem.style.transform = `translate(${pos}px,${pos}px)`;


    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    } else {
        elem.style.transform = `translate(0px,0px)`;
    }
    }

    btn.addEventListener('click', () => {
        pos = 0;
        elem.style.transform = "translate(0px,0px)";
    
        requestAnimationFrame(myAnimation)
    });

    
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);
})()



