(function(){
    const btn = document.querySelector('.btn2'),
    box = document.querySelector('.box');

btn.addEventListener('click', () => {
    box.classList.remove('ani');

setTimeout(animation, 500, box);
});

function animation(elem) {
    elem.classList.add('ani');
}
})()



//ПЕСОЧНИЦА



// let timerId,
//     i=0;
// btn.addEventListener('click', () => {
//      timerId = setInterval(logger, 2000, 'vasya');
// });

// function logger(name) {
//     console.log(name);
//     i++;
//     if(i == 3) {
//         clearInterval(timerId);
//     }
// }

// let id = setTimeout(function log(){
//     console.log('hello');
//      setTimeout(log, 500);
// }, 500)



// const now = new Date();

// console.log(now.setDate(0), now.getDate());

// const obj = {
//     name: 'vasya',
//     seyName() {
//         function sey() {
//             console.log(this);
//         };
//         sey();
//     }
// };

// obj.seyName();

// class Rectangle {
//     constructor(width, height){
//         this.width  = width;
//         this.height = height;
//     }

//     calcArea(){
//         return this.width * this.height;
//     }
// }

// class ColorTextWhithRectangle extends Rectangle{
//     constructor(width, height, color, text){
//         super(width, height);
//         this.text = text;
//         this.color = color;
//     }

//     showMyProps(){ 
//         console.log(`text:${this.text} color:${this.color}`);
//     }
// }

// const long = new ColorTextWhithRectangle(15, 10, 'red', 'world');
// console.log(long);
// console.dir(long);


// function go() {
//     return ":P"
//   }
  
//   function withDefaults(a, b = 5, c = b, d = go(), e = this, 
//                         f = arguments, g = this.value) {
//     return [a,b,c,d,e,f,g];
//   }
//   function withoutDefaults(a, b, c, d, e, f, g){
//     switch(arguments.length){
//       case 0:
//         a
//       case 1:
//         b = 5
//       case 2:
//         c = b
//       case 3:
//         d = go();
//       case 4:
//         e = this
//       case 5:
//         f = arguments
//       case 6:
//         g = this.value;
//       default:
//     }
//     return [a,b,c,d,e,f,g];
//   }
