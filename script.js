var terrifying = 0;
var warrior = false;
var chieftain = false;
var boneCrusher = false;
var hunter = false;

var decisions = [6];

for(var i = 0; i < decisions.length; i++){
    decisions[i] = false;
}

$('.selectable').click(function(){
    $('#chosenOne').attr('src',$(this).attr('src'));
    $('#previewPic').attr('src',$(this).attr('src'));
    terrifying = terrifying+1;

   // $('#description').html($(this).attr('alt'));
});

hide();

function hide(){
    $(".hidden").toggle();
};


// QUIZ 1

$('#warrior').click(function(){
    chieftain, boneCrusher, hunter = false;
    warrior = true;
    decisions[0] = true;
    document.querySelector("#class").innerHTML = "Warrior";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Warriors.";

});

$('#boneCrusher').click(function(){
    chieftain, warrior, hunter = false;
    decisions[0] = true;
    boneCrusher = true;
    document.querySelector("#class").innerHTML = "Bone Crusher";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Bone Crushers.";

});

$('#hunter').click(function(){
    chieftain, boneCrusher, warrior = false;
    decisions[0] = true;
    hunter = true;
    document.querySelector("#class").innerHTML = "Hunter";
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Hunters.";

});

$('#chieftain').click(function(){
    warrior, boneCrusher, hunter = false;
    decisions[0] = true;
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
    decisions[1] = true;
    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer2").innerHTML = "Answer: You tell the Truth and Balgrub returns as the hero.";

});

$('#kill').click(function(){

    truth = true;
    kill = false;
    decisions[1] = true;
    document.querySelector("#class").innerHTML = "Chieftain";
    document.querySelector("#answer2").innerHTML = "Answer: You quickly finish him and return as a hero.";

});

//QUIZ 3

var jump = false;
var wait = false;

$('#jump').click(function(){

    jump = true;
    wait = false;
    decisions[2] = true;
    
    document.querySelector("#answer3").innerHTML = "Answer: You jump blood crazed towards the enemy.As the Orcish Heroes of old, you charge with berserker fury!";

});

$('#wait').click(function(){

    wait = true;
    jump = false;
    decisions[2] = true;
    
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
    decisions[3] = true;
    
    document.querySelector("#answer4").innerHTML = "Answer: Filthy humans.You slaughter all of them without a drop of mercy.";

});

$('#prisonersEnslave').click(function(){

    prisonersKill = false;;
    prisonersEnslave = true;
    prisonersMines = false;
    prisonersFree = false;
    decisions[3] = true;
    
    document.querySelector("#answer4").innerHTML = "Answer: You slaughter the suriving men and take the rest to serve their new masters.";

});

$('#prisonersFree').click(function(){

    prisonersKill = false;;
    prisonersEnslave = false;
    prisonersMines = false;
    prisonersFree = true;
    decisions[3] = true;
    
    document.querySelector("#answer4").innerHTML = "Answer: In an act of great mercy you let them go.They cant believe and thank you with tears in their eyes.";

});

$('#prisonersMines').click(function(){

    prisonersKill = false;
    prisonersEnslave = false;
    prisonersMines = true;
    prisonersFree = false;
    decisions[3] = true;
    
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
       decisions[4] = true;
    
    document.querySelector("#answer5").innerHTML = "Answer: Only the strong can rule.Everybody makes a circle and you step towards your old friend, Great Axe in hand.";

});
  
$('#balgrubKill').click(function(){

    balgrubFight = false;
    balgrubKill = true;
    balgrubImprison = false;
    balgrubStepDown = false;
    decisions[4] = true;
 
 document.querySelector("#answer5").innerHTML = "Answer: Chieftains don't have to do everything themselves.You give the order and your men jump on Balgrub from all sides.";

});

$('#balgrubImprison').click(function(){

    balgrubFight = false;
    balgrubKill = false;
    balgrubImprison = true;
    balgrubStepDown = false;
    decisions[4] = true;
 
 document.querySelector("#answer5").innerHTML = "Answer: He is your friend after all.You give the order and your men disarm him and take him prisoner.Not before he kills 5 of them.";

});

$('#balgrubStepDown').click(function(){

    balgrubFight = false;
    balgrubKill = false;
    balgrubImprison = false;
    balgrubStepDown = true;
    decisions[4] = true;
 
 document.querySelector("#answer5").innerHTML = "Answer: He is the stronger and you can only admit that.Commander is not so bad after all.You step down peacefully.";

});

// QUIZ 6

   var finalAttack = false;
   var finalSuePeace = false;
   var finalAmbush = false;
   var finalRetreat = false;

   $('#finalAttack').click(function(){

    finalAttack = true;
    finalRetreat = false;
    finalSuePeace = false;
    finalAmbush = false;
    decisions[5] = true;
 
   document.querySelector("#answer6").innerHTML = "Answer: You decide to do this the Orc way.Frontal Assault with all your might.The two armies face each other and take battle order.Your Bone Crushers scream with battlelust, morale cannot be higher.Forward for GLORY AND DEATH!";

   });

   $('#finalSuePeace').click(function(){

    finalAttack = false;
    finalRetreat = false;
    finalSuePeace = true;
    finalAmbush = false;
    decisions[5] = true;
 
   document.querySelector("#answer6").innerHTML = "Answer: This land and our people have seen too much war.You wait for their army to enter the field and then send peace envoys.You hope for the best.";

   });

   $('#finalRetreat').click(function(){

    finalAttack = false;
    finalRetreat = true;
    finalSuePeace = false;
    finalAmbush = false;
    decisions[5] = true;
 
   document.querySelector("#answer6").innerHTML = "Answer: They are too many.You cannot risk so many orc's lives.You scorch the camp and retreat to the mountains.";

   });


   $('#finalAmbush').click(function(){

    finalAttack = false;
    finalRetreat = false;
    finalSuePeace = false;
    finalAmbush = true;
    decisions[5] = true;
 
   document.querySelector("#answer6").innerHTML = "Answer: A wise commander uses every advantage.You give the command and your orc army lies in wait around the mountain passes.You are going to give them one nasty surprise.";

   });


// Reveal

document.querySelector("#terrifying").innerHTML = "Terrifying: "+terrifying;

var unveiled = false;

$('#reveal').click(function(){

    var doneAll = true;

    for(var i = 0; i<decisions.length; i++){
        if(!decisions[i]){
            doneAll = false;
            break;
        }
    }

    var doneAll = true;

    if(!unveiled && doneAll){
         scoobyDo();
         $(".hidden").toggle();
         unveiled = true;
         $("#quiz").toggle();
         $("#picture").toggle();
    }

});

function scoobyDo(){

var strenght = 0;
var prestige = 0;
var terrible = 0;
}


