class Quiz{
constructor(){}


getState(){

var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
    gameState = data.val();


})





}
update(state){
    database.ref('/').update({
gameState: state


    }

    )
}

async start(){

if(gameState === 0){
contenstant = new Contenstant();
var contenstantCountRef = await database.ref('contenstant')
if(contenstantCountRef.exists ()){
contestantCount = contestantCountRef.val()
contestant.getCount();
}
question = new Question()
question.display();
}
}

play(){
question.hide();
textSize(30)
fill("brown")
text("Result of the quiz", 340, 70)
Contestant.getPlayerInfo();
}

}