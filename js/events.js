// 2 
let h2 = document.querySelectorAll("h2");
for(let h of h2){
    // console.log(h);
    h.style.color ='lightblue ';
    
}
// 3
document.getElementById("backpack").style.backgroundColor='tomato';

// 4
let cards =document.getElementsByClassName("card");
for(let card of cards){
    card.style.borderRadius='30px'
;}

// 5
let pandaBtnBuyNow=document.getElementById('panda-btn-buy-now').addEventListener('click',pandaBtnBuyNowfun);
function pandaBtnBuyNowfun(){
    console.log('added in handeler');
}
// 6
let pandaBtnBuyNowClass=document.querySelectorAll('.panda-btn-buy-now');
for(let button of pandaBtnBuyNowClass){
    button.addEventListener('click',function(event){
        // console.log(event.target.parentNode);
        // console.log(event);
        event.target.parentNode.removeChild(event.target);
        
        
    })
}
// 7
let inputFill=document.getElementById('exampleInputEmail1');

inputFill.addEventListener('keyup',function(event){
    let pandaBtnBuyNowLast=document.getElementById('panda-btn-buy-no');
    if(event.target.value ==="LET'S STAY IN TOUCH"){
        pandaBtnBuyNowLast.removeAttribute('disabled');
    }
    else{
        pandaBtnBuyNowLast.setAttribute('disabled',true);
    }
})
// 8
var image = document.getElementById("image");



image.addEventListener('mouseover', function(){
  image.src = "../images/shoes/shoe-2.png"
})
image.addEventListener('mouseout', function(){
    image.src = "../images/shoes/shoe-1.png"
  })

// 9
inputFill.addEventListener('dblclick',function(event){
    event.target.style.backgroundColor='tomato';
})