// Start Writing Code Here
const clickMeBtn=document.getElementById(`btn-click-me`);
clickMeBtn.onclick=function(event){
event.stopPropagation();
event.stopImmediatepropagation();
    console.log(`Button Clicked`);

}
clickMeBtn.onclick=function(){
    console.log(`Another Click event`);
}

clickMeBtn.onmouseover=function(){
    console.log(`Mouse Over`);
}
clickMeBtn.addEventListener(`mouseout`,function(event){
    console.log(`Mouse out`);
})
const box1=document.getElementById(`box1`);
box1.addEventListener(`click`,function(){
    console.log(`Click on box 1`);
})
var box4=document.getElementById(`box4`);
box4.addEventListener(`click`,function(event){
   if(event.target.tagName === `LI`){
       console.log(`Click on a List item`);
   }

})
const inputs=document.querySelectorAll(`input`);
const submitBtn=document.querySelector(`button[type=submit]`);
inputs[0].addEventListener(`change`,function(event){
    // console.log(`Rafiul islam Robin Khan`);
    console.log(event.target.value);
})
submitBtn.addEventListener(`click`,function(event){
    event.preventDefault();
    if(inputs[0].value===``||inputs[1].value===``){
        alert(`Input Field can not be empty`);
    }
    else{
        console.log(`Your Name:`,inputs[0].value`Your email:`,inputs[1].value);
    }
})
document.addEventListener(`keydown`,function(event){
    console.log(`Key Down Event`);
    console.log(event.key);
    console.dir(event);
})
// document.addEventListener(`keypress`,function(){
//     console.log(`Key Press Event`);
// })
// document.addEventListener(`keyup`,function(){
//     console.log(`Key up Event`);
// })
window.addEventListener(`load`,function(){
    console.log(`Your Page Fully Loaded`);
})
document.addEventListener(`DOMContentLoaded`,function(){
    console.log(`Your Markup is Ready`);
})
var img1=document.querySelector(`.im`);
var img1=document.querySelector(`img[alt=invalid-img]`);
img1.addEventListener(`load`,function(){
    console.log(`Image 1 Has Successfully Loaded`);
});