var playing=false;
var scor;
var action;
var timeremaining;
var correctans;
// if we click on the start/reset button the we will check whether we are playing
document.getElementById("startreset").onclick=function(){
  //if we are playing then reload the page
   if(playing == true)
   {
     location.reload();//reload page
   }
   else
   {
     playing=true;
     scor=0;
     document.getElementById("scorevalue").innerHTML=scor;
     // document.getElementById("timeremaining").style.display="block";
     show("timeremaining");
     timeremaining=60;
      document.getElementById("timeremainingvalue").innerHTML=timeremaining;
      hide("gameover");
     document.getElementById("startreset").innerHTML="<h4>Reset Game</h4>";
     startCountDown();
      generateQA();
   }
}
for(i=1;i<5;i++){
  document.getElementById("box"+i).onclick=function(){
    if(playing == true){
      if(this.innerHTML == correctans){
        scor++;
        document.getElementById("scorevalue").innerHTML=scor;
        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
        },1000);
        generateQA();
      }
      else
      {
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        },1000);
      }
    }
  }
}






function startCountDown()
{
  action=setInterval(function(){
  timeremaining=timeremaining-1;
  document.getElementById("timeremainingvalue").innerHTML=timeremaining;
  if(timeremaining == 0){
    stopCountdown();
    // document.getElementById("gameover").style.display="block";
    show("gameover");
    document.getElementById("gameover").innerHTML="<p>Game over!</p><p>Your score is "+scor+".</p>";
    //document.getElementById("timeremaining").style.display="none";
    hide("timeremaining");
    hide("correct");
    hide("wrong");
     playing=false;
     document.getElementById("startreset").innerHTML="<h4>Start Game</h4>";
  }
    },1000);

}
function stopCountdown()
{
  clearInterval(action);
}
function show(Id)
{
  document.getElementById(Id).style.display="block";
}
function hide(Id)
{
  document.getElementById(Id).style.display="none";
}
 function generateQA()
 {
   var x = 1+Math.round(Math.random()*10);
   var y = 1+Math.round(Math.random()*10);
   correctans=x*y;
   document.getElementById("question").innerHTML=x+"x"+y;
   var correctposition = 1+Math.round(Math.random()*3);
   document.getElementById("box"+correctposition).innerHTML=correctans;
   var answers =[correctans];



   for(i=1;i<5;i++){
     if(i != correctposition){
       var wrongAnswer;
       do{
         wrongAnswer=(1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));
         // document.getElementById("box"+i).innerHTML=wrongAnswer;
     }while(answers.indexOf(wrongAnswer)>-1);
     document.getElementById("box"+i).innerHTML=wrongAnswer;
     answers.push(wrongAnswer);
   }
 }
}
//if we not playing then take few actions
//set score to 0
//1.show countdown box
//2.reduce time by one sec by using loops
//if time is left then resume redusing
//if not the game Over
//3.change button text to reset button
//4.generate new question and multiple answers
// second phase
//1.if we click on the answers box then
//i.ask r we playing
//if yes-->ask correct or wrong
           //if correct then 1.increase score by 1 2.show correct box for 1 sec 3.generate new question and answers
           //if wrong then show try again box for 1 second
