let score=
JSON.parse(localStorage.getItem('score'))|| {
    wins:0,
    losses:0,
    Ties:0
};

updatescoreelement();
/*
if(!score){
  score={
    wins:0,
    losses:0,
    Ties:0
  }
}*/

let isAutoplaying=false;
let intervalId;
function autoplay(){
  if(!isAutoplaying){
    intervalId=setInterval(function(){
      const playermove=pickcomputerMove();
     playgame(playermove);
    },1000)
  isAutoplaying=true;
  }
  else{
     clearInterval(intervalId);
     isAutoplaying=false;
  }
}

function playgame(playerMove){
  
  const ComputerMove=pickcomputerMove();
  let result='';
  if(playerMove==='Scissors'){
      if(ComputerMove === 'rock'){
        result='You lose';
      }
      else if(ComputerMove==='paper'){
        result='You win';
      }
      else if(ComputerMove==='Scissors'){
        result='Tie';
      }
}
else if(playerMove==='paper')
{
  if(ComputerMove === 'paper'){
    result='Tie';
  }
  else if(ComputerMove==='rock'){
    result='You win';
  }
  else if(ComputerMove==='Scissors'){
    result='You lose';
  }
}
else if(playerMove==='rock')
{
  if(ComputerMove === 'rock'){
    result='Tie';
  }
  else if(ComputerMove==='paper'){
    result='You lose';
  }
  else if(ComputerMove==='Scissors'){
    result='You win';
  }
}

if(result==='You win'){
  score.wins+=1;
}
else if(result==='You lose')
{
  score.losses+=1;
}
else if(result==='Tie')
{
  score.Ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updatescoreelement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${ComputerMove}-emoji.png" class=
"move-icon">
Computer`
}

function updatescoreelement(){
  document.querySelector('.js-score').innerHTML=
  `Wins:${score.wins},Losses:${score.losses},Ties:${score.Ties}`;
}

function pickcomputerMove(){
  const randomNumber=Math.random();
  
  let ComputerMove='';

  if(randomNumber >=0&& randomNumber<1/3){
    ComputerMove= 'rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
    ComputerMove= 'paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    ComputerMove= 'Scissors';
  }
  return ComputerMove;
}