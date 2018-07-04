
//Choose pic

var unveiled = false;

$('#refresh').click(function() {
    window.location.reload();
});

$('.selectable').click(function(){
    $('#chosenOne').attr('src',$(this).attr('src'));
    $('#previewPic').attr('src',$(this).attr('src'));

});



$('#reveal').click(function(){


    var doneAll = true;


    for(var i = 0; i<decisions.length; i++){
        if(!decisions[i]){
            doneAll = false;
            break;
        }
    }

    if(!unveiled && doneAll){
        
         calculateEnding();
         $('.hidden').toggle();
         $('#epilogue').toggle();
         $('#intro').toggle();
         unveiled = true;
         
    }
        
});

$('#howToPlay').click(function(){
alert('The Story unfolds chapter by chapter.\n\nTo start, just click the arrow on the bottom of the page and go through the story.After every chapter, make your choice and click the arrow again for the next chapter to be shown.\n\n At the end, click reveal to see how all ends.');
});



// Reveal Chapter

var unveiled = false;



var strenght = 0;
var prestige = 0;
var terrible = 0;
var bravery = 0;
var loyalty = 0;
var peacefullness =0;
var cunning = 0;


var maxPoints = 0;
var titleEarned = 'The Orc';
var banished = false;
var dead = false;
var battleWon = false;
var peaceMade = false;
var secondMan = false;


// CALCULATE ENDING

function calculateEnding(){

calculatePoints();

document.querySelector("#endingTitle").innerHTML = 'Grub '+titleEarned;        //The Title he earned
balgrubFuture();
orcsHumansFate();
finalEnding();


}



function orcsHumansFate(){                    // in Calculations


    if(finalAttack || finalAmbush){

        if(finalAttack){
         finalAttackFunc();
         return;
        }

        if(finalAmbush){
            finalAmbushFunc();
            return;
        }
    }else{

        if(finalRetreat){
            finalRetreatFunc();
            return;
        }

        if(finalSuePeace){
            finalSuePeaceFunc();
        }

    }

}

function finalEnding(){

    if(dead){
        return;
    }else if(banished){
      $('#endingPic').attr('src', 'ending/banished.jpg');
      document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: YOU HAVE BEEN BANISHED";
      document.querySelector('#endingText').innerHTML = "You have been banished from orcish territory.You pack your things and wonder off alone.You travel far beyond the known lands.You adventures have just begun but that is another story.You have no idea what happened to the orcs home and Balgrub but may be one day you will find out.";
    }else if(secondMan){
      $('#endingPic').attr('src', 'ending/secondMan.jpg');
      document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: YOU ARE BALGRUBS FIRST COMMANDER";
      document.querySelector('#endingText').innerHTML = "Your loyal actions and the love of your friend and comrade Balgrub, had put you at the head of the Orc army as his most trusted friend and adviser.No wonder many conquests and battles lay ahead.And you will always be by your friend.Second in command.";

    }else if(peaceMade){

       $('#endingPic').attr('src', 'ending/peace.jpg');
       document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: FIRST PEACEFUL ORC CHIEFTAIN (HALF-VICTORY)";
       document.querySelector('#endingText').innerHTML = "Your actions have brought peace unto this land.You have put an end to the hostilites between orcs and humans.At least for now.Other orc rulers find you weak, because of this.Even some of your own orcs.However long you rule, it will be in peace.But there is not doubt, that what you have achieved is incredible."; 

    }else if(battleWon){

        battleWonEnding();

    }


}

function battleWonEnding(){

    if(titleEarned === 'The Cunning Overlord'){
        var chance = Math.random()*10;


        if(chance > 5){
            $('#endingPic').attr('src', 'ending/chieftainOfChieftains.jpg');
            document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: CHIEFTAIN OF CHIEFTAINS (FULL VICTORY)";
            document.querySelector('#endingText').innerHTML = "You did it!After your crushing victory all the nearby tribes joined you.Those who didn't met with the same fate as the humans.Far and wide messengers hurry to bring the news.For the first time in history the Orc's have a King and his name is Grub the Great!The world should tremble!"
        }else{
            $('#endingPic').attr('src', 'ending/chieftain.jpg');
            document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: CHIEFTAIN (HALF VICTORY)";
            document.querySelector('#endingText').innerHTML = "You did it!AFter your victory over the humans other villages joined you.You are now Chieftain of a very big Orcish dominion.Human and orcs tremble of your name!There are however those that oppose you.Other chieftains.But it is no small achievement what you did!";
        }

    }else{
        $('#endingPic').attr('src', 'ending/chieftain.jpg');
            document.querySelector('#endingTextTitle').innerHTML = "YOUR FATE: CHIEFTAIN (HALF VICTORY)";
            document.querySelector('#endingText').innerHTML = "You did it!After your victory over the humans other villages joined you.Word has spread of you far and wide.You are now Chieftain of a very big Orcish dominion.Human and orcs tremble of your name!There are however those that oppose you.Other chieftains.But their turn will come too.Mighty Grub doesn't forget!";
    }



}






