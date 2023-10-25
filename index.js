let notification = document.getElementById("notification")
var x = document.getElementById("myAudio"); 
//console.log(x);
x.play()
setTimeout(()=>{
    //console.log(notification,'will go');
    notification.style.display="none"
},8000)
let loader = document.getElementById("loader")
let afterloader =  document.getElementById("afterloader")
setTimeout(()=>{
    loader.style.display='none'
    afterloader.style.display='block'
},4000)

// function somasundaram(){
//     console.log('Decbouncing da mapla!');
// }
// const debo=(fun,tim)=>{
//     let timer 
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fun.apply(context,arguments)
//         }, tim);
//     }
// }
// const betterfunction = debo(somasundaram,300)



// const betterthrottle = funofun()