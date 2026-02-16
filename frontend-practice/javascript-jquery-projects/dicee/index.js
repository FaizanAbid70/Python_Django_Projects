let min = 1;
let max = 6;
let randomNumber1 = Math.floor(Math.random()*(max-min+1))+min;
document.querySelector(".img1").setAttribute('src',`./images/dice${randomNumber1}.png`);
let randomNumber2 = Math.floor(Math.random()*(max-min+1))+min;
document.querySelector(".img2").setAttribute('src',`./images/dice${randomNumber2}.png`);
if(randomNumber1==randomNumber2){
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins!";   
}