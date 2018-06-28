var terrifying = 0;
var warrior = false;
var chieftain = false;
var boneCrusher = false;
var hunter = false;

$('.selectable').click(function(){
    $('#chosenOne').attr('src',$(this).attr('src'));
    $('#previewPic').attr('src',$(this).attr('src'));
    terrifying = terrifying+1;

   // $('#description').html($(this).attr('alt'));
});

//commit test

// QUIZ 1

$('#warrior').click(function(){
    chieftain, boneCrusher, hunter = false;
    warrior = true;
    document.querySelector("#class").innerHTML = "Warrior";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Warriors.";

});

$('#boneCrusher').click(function(){
    chieftain, warrior, hunter = false;
    boneCrusher = true;
    document.querySelector("#class").innerHTML = "Bone Crusher";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Bone Crushers.";

});

$('#hunter').click(function(){
    chieftain, boneCrusher, warrior = false;
    hunter = true;
    document.querySelector("#class").innerHTML = "Hunter";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Hunters.";

});

$('#chieftain').click(function(){
    warrior, boneCrusher, hunter = false;
    chieftain = true;
    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Chieftains.";

});

//QUIZ 2

var truth = false;
var kill = false;

$('#truth').click(function(){

    truth = true;
    kill = false;
    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer2").innerHTML = "Answer: You tell the Truth and Balgrub returns as the hero.";

});

$('#kill').click(function(){

    truth = true;
    kill = false;
    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer2").innerHTML = "Answer: You quickly finish him and return as a hero.";

});

//QUIZ 3

var jump = false;
var wait = false;

$('#jump').click(function(){

    jump = true;
    wait = false;
    
    document.querySelector("#answer3").innerHTML = "Answer: You jump blood crazed towards the enemy.As the Orcish Heroes of old, you charge with berserker fury!";

});

$('#wait').click(function(){

    wait = true;
    jump = false;
    
    document.querySelector("#answer3").innerHTML = "Answer: You are brave but not stupid.You hold the position and wait for the others to reach you.";

});

// QUIZ 4

var prisonersKill = false;
var prisonersEnslave = false;
var prisonersMines = false;
var prisonersFree = false;

$('#prisonersKill').click(function(){

    prisonersKill = true;
    prisonersEnslave = false;
    prisonersMines = false;
    prisonersFree = false;
    
    document.querySelector("#answer4").innerHTML = "Answer: Filthy humans.You slaughter all of them without a drop of mercy.";

});

$('#prisonersEnslave').click(function(){

    prisonersKill = false;;
    prisonersEnslave = true;
    prisonersMines = false;
    prisonersFree = false;
    
    document.querySelector("#answer4").innerHTML = "Answer: You slaughter the suriving men and take the rest to serve their new masters.";

});

$('#prisonersFree').click(function(){

    prisonersKill = false;;
    prisonersEnslave = false;
    prisonersMines = false;
    prisonersFree = true;
    
    document.querySelector("#answer4").innerHTML = "Answer: In an act of great mercy you let them go.They cant believe and thank you with tears in their eyes.";

});

$('#prisonersMines').click(function(){

    prisonersKill = false;
    prisonersEnslave = false;
    prisonersMines = true;
    prisonersFree = false;
    
    document.querySelector("#answer4").innerHTML = "Answer: You gather them and send them to work for the Orcish economy.Most will die within one year but who cares.";

});

//QUIZ 5

   var balgrubFight = false;
   var balgrubKill = false;
   var balgrubImprison = false;
   var balgrubStepDown = false;


   $('#balgrubFight').click(function(){

       balgrubFight = true;
       balgrubKill = false;
       balgrubImprison = false;
       balgrubStepDown = false;
    
    document.querySelector("#answer5").innerHTML = "Answer: Only the strong can rule.Everybody makes a circle and you step towards your old friend, Great Axe in hand.";

});
  
$('#balgrubKill').click(function(){

    balgrubFight = false;
    balgrubKill = true;
    balgrubImprison = false;
    balgrubStepDown = false;
 
 document.querySelector("#answer5").innerHTML = "Answer: Chieftains don't have to do everything themselves.You give the order and your men jump on Balgrub from all sides.";

});

$('#balgrubImprison').click(function(){

    balgrubFight = false;
    balgrubKill = false;
    balgrubImprison = true;
    balgrubStepDown = false;
 
 document.querySelector("#answer5").innerHTML = "Answer: He is your friend after all.You give the order and your men disarm him and take him prisoner.Not before he kills 5 of them.";

});

$('#balgrubStepDown').click(function(){

    balgrubFight = false;
    balgrubKill = false;
    balgrubImprison = false;
    balgrubStepDown = true;
 
 document.querySelector("#answer5").innerHTML = "Answer: He is the stronger and you can only admit that.Commander is not so bad after all.You step down peacefully.";

});

// QUIZ 6

   var finalAttack = false;
   var finalSuePeace = false;
   var finalAmbush = false;
   var finalRetreat = false;




// Reveal

document.querySelector("#terrifying").innerHTML = "Terrifying: "+terrifying;

$('#reveal').click(function(){

    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer3").innerHTML = "Answer: You quickly finish him and return as a hero.";

});


