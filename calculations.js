function finalAttackFunc(){
    var chance = Math.random()*10;

    if(chance >= 6){
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: You have never seen such a massacre.At first the humans looked like winning with their big numbers but then the Orcish horde went into battle Rage.Bone Crushers at the center, the Humans have never faced such fury before.After just 2 hours you could smell the terror and fear.Every left human alive was running for his life.Battle was won ';
        battleWon = true;
    }else{
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: You clashed frontally into the human ranks.Your Bone Crushers made a hole in their ranks and terrified humans died everywhere.But then their numbers began to tell.For every dead human 3 more showed up.Then came the cavalry hitting you from behind and finished the last hope.Battle is lost and you died like a true Orc fighting.';
        dead = true;
    }
}

function finalAmbushFunc(){
    var chance = Math.random()*10;

    if(chance >= 4){
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: You knew your land much better then the enemy.In one of the narrow passes you gave the command and 1500 bloodthursty orcs descended on their thin lines.They never knew what hit them.It was a massacre.Battle is won';
        battleWon = true;
    }else{
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: You knew your land much better then the enemy.You placed your orcs in wait in one of the narrow passes in the mountains.But suddenly humans started appearing from both sides.You were betrayed!Somehow they figured out and ambushed the ambushers.At least you die like a true orc - fighting.';
        dead = true;
    }
}

function finalRetreatFunc(){
    var chance = Math.random()*10;

    if(chance >= 8){
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: After burning Orzammar you retreated deep into the mountains.The humans failed to pursue and you made a temporary camp.One night around the great fire at the center you were called out.The orc commanders with grim and angry faces surrounded you killed you.Just like that.You were are shame for every orc.';
        dead = true;
    }else{
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: After burning Orzammar you reatreated deep into the mountains.The humans pursued but every day they died from sickness and your raids.Not long after they were so weak that you decided its time and ordered a frontal assault.Their remaining soldiers were so weak they hardly even fought.The Battle is won.';
        battleWon = true;
        dead = true;
    }
}

function finalSuePeaceFunc(){
    
    if(prisonersFree){
        var chance = Math.random()*10;
        if(chance >= 6){
            document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: Your peace envoys returned with success and you meet personally with the Humans commanders.Your previous actions freeing the prisoners have greatly helped.You decide together - You will not battle.The human army leaves your lands.'
            peaceMade = true;
        }else{
            document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: Even with your best efforts and previous good actions, the Humans have come for battle.They refuse to negotiate and surprise attack you in the night.They massacre every Orc and take the rest prisoners.At least you managed to kill few humans before a crossbow hit you.Battle is lost.'
            dead = true;
        }
    }else{
        document.querySelector('#battleOrzammar').innerHTML = 'The Battle for Orzammar: You try to make peace but your envoys dont return.The Humans have not forgotten what you did before and they have come for battle.They refuse to negotiate and surprise attack you in the night.They massacre every Orc and take the rest prisoners.At least you managed to kill few humans before a crossbow hit you.Battle is lost.';
        dead = true;
    }
}

function calculatePoints(){

    if(boneCrusher){
        terrible = terrible+2;
        strenght = strenght+5;
    }

    if(warrior){
        terrible = terrible+1;
        strenght = strenght+5;
    }

    if(chieftain){
        cunning = cunning+5;
    }

    if(hunter){
        peacefullness = peacefullness+5;
    }

    if(balgrubKill){
        terrible = terrible+10;
    }

    if(truth){
        loyalty = loyalty+15;
    }

    if(jump){
        bravery = bravery+15;

    }

    if(wait){
        cunning = cunning + 10;
    }

    if(prisonersKill){
        terrible = terrible + 15;

    }

    if(prisonersFree){
        peacefullness = peacefullness + 15;
    }

    if(prisonersEnslave){
        terrible = terrible +7;
        cunning = cunning +5;
    }

    if(prisonersMines){
        terrible = terrible+5;
        cunning = cunning+15;
    }

    if(balgrubFight){
        bravery = bravery + 15;
    }

    if(balgrubImprison){
        loyalty = loyalty+10;
        cunning = cunning+5;
    }

    if(balgrubKill){
        terrible = terrible+15;
    }

    if(balgrubStepDown){
        peacefullness = peacefullness+10;
        loyalty = loyalty + 15;
    }

    if(finalAttack){
        bravery = bravery+15;
    }

    if(finalAmbush){
        cunning = cunning+15;
    }

    if(finalRetreat){
        cunning = cunning+10;
    }

    if(finalSuePeace){
        peacefullness = peacefullness+15;
    }

    if(bravery === Math.max(bravery, cunning, peacefullness, loyalty, terrible)){
        titleEarned = 'The Mighty Berserker';
    }

    if(terrible === Math.max(bravery, cunning, peacefullness, loyalty, terrible)){
        titleEarned = 'The Ruthless Destroyer';
    }

    if(cunning === Math.max(bravery, cunning, peacefullness, loyalty, terrible)){
        titleEarned = 'The Cunning Overlord';
    }

    if(loyalty === Math.max(bravery, cunning, peacefullness, loyalty, terrible)){
        titleEarned = 'The Loyal';
    }

    if(peacefullness === Math.max(bravery, cunning, peacefullness, loyalty, terrible)){
        titleEarned = 'The Peaceful';
    }
}