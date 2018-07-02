
//Choose pic

var unveiled = false;

$('.selectable').click(function(){
    $('#chosenOne').attr('src',$(this).attr('src'));
    $('#previewPic').attr('src',$(this).attr('src'));
    terrifying = terrifying+1;

});

$('#reveal').click(function(){


    var doneAll = true;


    for(var i = 0; i<decisions.length; i++){
        if(!decisions[i]){
            doneAll = false;
            break;
        }
    }

   // var doneAll = true;

    if(!unveiled && doneAll){
        
         calculateEnding();
         $('.hidden').toggle();
         $('#epilogue').toggle();
         $('#intro').toggle();
         unveiled = true;
         /* $('#quiz').toggle();
         $("#picture").toggle();
         $('#intro').toggle();
         $('#tavern').toggle(); */
    }
        
});


// Reveal Chapter

// document.querySelector("#terrifying").innerHTML = "Terrifying: "+terrifying;

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


// CALCULATE ENDING

function calculateEnding(){

calculatePoints();
//alert('bravery: '+bravery+'   terrible' + terrible+ '   cunning' + cunning);
/* if(titleEarned === 'The Cunning Overlord'){
    if(Math.floor(Math.random()*5) === 1){
        titleEarned === 'The Great Chieftain of Chieftains';
    }
} */

document.querySelector("#endingTitle").innerHTML = 'Grub '+titleEarned;        //The Title he earned
balgrubFuture();
orcsHumansFate();


}




function balgrubFuture(){

    if(balgrubFight || balgrubKill){

        document.querySelector('#balgrubsFate').innerHTML = "Balgrubs fate: Since you have killed your best friend Balgrub, sometimes he comes to you at night in your dreams.You talk and hunt as you used to when you were little."

    }

    if(balgrubImprison){

        var chance = Math.random()*10;

        if(chance >= 5){
        document.querySelector('#balgrubsFate').innerHTML = 'Balgrubs fate: After you imprisoned your best friend Balgrub, you start to visit him more and more often.He convinces you he is sorry and the end you set him free.Not long after that he murders the guards and murders you in your sleep.';
        dead = true;
        }
        if(chance < 5){
        document.querySelector('#balgrubsFate').innerHTML = 'Balgrubs fate: After you imprisoned your best friend Balgrub, you start to visit him more and more often.He is truly sorry about what he did so you set him free.Nothing can separate you again now.';
        }
    }

    if(balgrubStepDown){
        var chance = Math.random()*10;

        if(chance >= 5){
        document.querySelector('#balgrubsFate').innerHTML = 'Balgrubs fate: After you stepped down, as chieftain Balgrub has become more and more distant.He considers you weak now and finally the day comes when he banishes you from the land.Only out of sweet memmory he lets you live.';
        banished = true;
        }
        if(chance < 5){
        document.querySelector('#balgrubsFate').innerHTML = 'Balgrubs fate: After you stepped down, as chieftain Balgrub has required your counsil in every matter.Ofcourse you will always be the weaker one but second place is not so bad.Not at all when the first is Balgrub the Mighty.';
        }
    }

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






