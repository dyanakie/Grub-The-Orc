var terrifying = 0;
var warrior = false;
var chieftain = false;
var boneCrusher = false;
var hunter = false;
var wifeName = '';

var decisions = [7];

for(var i = 0; i < decisions.length; i++){
    decisions[i] = false;
}




//STORY MODE
// QUIZ 1

$('#warrior').click(function(){
    chieftain, boneCrusher, hunter = false;
    warrior = true;
    decisions[0] = true;
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Warriors.";

});

$('#boneCrusher').click(function(){
    chieftain, warrior, hunter = false;
    decisions[0] = true;
    boneCrusher = true;
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Bone Crushers.";

});

$('#hunter').click(function(){
    chieftain, boneCrusher, warrior = false;
    decisions[0] = true;
    hunter = true;
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Hunters.";

});

$('#chieftain').click(function(){
    warrior, boneCrusher, hunter = false;
    decisions[0] = true;
    chieftain = true;
    document.querySelector("#answer1").innerHTML = "Answer: You are born in a family of Chieftains.";

});

//QUIZ 2

var truth = false;
var kill = false;

$('#truth').click(function(){

    truth = true;
    kill = false;
    decisions[1] = true;
    document.querySelector("#answer2").innerHTML = "Answer: You tell the Truth and Balgrub returns as the hero.";

});

$('#kill').click(function(){

    truth = true;
    kill = false;
    decisions[1] = true;
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
    
    document.querySelector("#answer4").innerHTML = "Answer: In an act of great mercy you let them go.They can't believe what you just did and thank you with tears in their eyes.";

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



   // TAVERN

   var wifeChosen = false;

   $("#wife").click(function(){

    if(wifeChosen){
        return;
    }

    var number = Math.floor(Math.random()*8);
    wifeChosen = true;
    decisions[6] = true;

    switch(number){

        case 0:
              $('#wife').attr('src', "resources/girls/girl1.jpg");
              wifeName = 'Margaroth';
              document.querySelector('#wifeInfo').innerHTML = "Margaroth The Warrior";
              document.querySelector('#wifeInfo2').innerHTML = "A soldier Orca from the warrior cast.Full of scars,brave and loyal.A good fit for you!";
              break;

        case 1:
              $('#wife').attr('src', "resources/girls/girl2.jpg");
              wifeName = 'Inga';
              document.querySelector('#wifeInfo').innerHTML = "Inga The Slut";
              document.querySelector('#wifeInfo2').innerHTML = "A waitress from the Tavern.She has been through half the camp's orcs.But boy is she wild in bed.Very wild!";
              break;
        case 2:
              $('#wife').attr('src', "resources/girls/girl3.jpg");
              wifeName = 'Grubra';
              document.querySelector('#wifeInfo').innerHTML = "Grubra the Berserker";
              document.querySelector('#wifeInfo2').innerHTML = "A strong Orca from the Bone Crusher caste.Her muscles are almost as big as yours.A good choice, just dont cheat on her!";    
              break;
        case 3:
              $('#wife').attr('src', "resources/girls/girl4.jpg");  
              wifeName = 'Bilgob';
              document.querySelector('#wifeInfo').innerHTML = "Bilgob the Crazy";
              document.querySelector('#wifeInfo2').innerHTML = "The most brutal Orcish assasin there is.Everybody fears her, as she is a great warrior and unscrupolous killer.But in bed she is softer than a human!";
              break;
        case 4:
              $('#wife').attr('src', "resources/girls/girl5.jpg");   
              wifeName = 'Obra';
              document.querySelector('#wifeInfo').innerHTML = "Obra the Witch";
              document.querySelector('#wifeInfo2').innerHTML = "She is the local Shaman's daughter.A dangerous and dark Orca.Many fear her magic and special skills.Has she made you drink a potion?";
              break;
        case 5:   
              $('#wife').attr('src', "resources/girls/girl6.jpg");
              wifeName = 'Brungo';
              document.querySelector('#wifeInfo').innerHTML = "Brungo the Gifted";
              document.querySelector('#wifeInfo2').innerHTML = "Well...A heart wants what a heart wants.Brungo is not called the gifted for nothing!";
              break;
        case 6:   
              $('#wife').attr('src', "resources/girls/girl7.jpg");
              wifeName = 'Nimitz';
              document.querySelector('#wifeInfo').innerHTML = "Nimitz the Romantic";
              document.querySelector('#wifeInfo2').innerHTML = "A simple Orca from the Hunter caste.She is romantic and loyal.A truly good wife for a strong Orc!";
              break;
        case 7:   
              $('#wife').attr('src', "resources/girls/girl8.jpg");
              wifeName = 'Mildred';
              document.querySelector('#wifeInfo').innerHTML = "Mildred the Ugly";
              document.querySelector('#wifeInfo2').innerHTML = "You will have to break many Orcish heads because of laughs behind your back.She may not be so pretty but she is your little sugar tootsie roll!";
              break;



    }

   })