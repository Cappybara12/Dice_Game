var c=(Math.floor(Math.random()*6)+1);

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+c+".png");

var h=(Math.floor(Math.random()*6)+1);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+h+".png");
if(c>h){
    document.querySelector("h1").innerHTML="Player 1 wins!!";
}
else if(h>c){
    document.querySelector("h1").innerHTML="Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}