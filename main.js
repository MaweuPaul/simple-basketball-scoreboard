
let homeScoreEL=document.getElementById("home-score-1");
let homeStorEl=document.getElementById("home-score")
let awayScoreEl=document.getElementById("away-score-1")
let awayStoreEl=document.getElementById("away-score")
let homeScore=0;
let awayScore=0;


function increaseHomeScoreOne(){
  homeScore +=1;
  homeStorEl.textContent=homeScore 
}
function increaseHomeScoreTwo()
{
  homeScore +=2;
  homeStorEl.textContent=homeScore 
}

function increaseHomeScoreThree(){
  homeScore +=3;
  homeStorEl.textContent=homeScore 
}
function increaseAwayScoreOne(){
  awayScore +=1;
  awayStoreEl.textContent=awayScore 
}function increaseAwayScoreTwo(){
  awayScore +=2;
  awayStoreEl.textContent=awayScore 
}function increaseAwayScoreThree(){
  awayScore +=3;
  awayStoreEl.textContent=awayScore
}




