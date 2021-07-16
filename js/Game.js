class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {

      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    thief = createSprite(800,880);
    thief.addAnimation("thief",thiefimg);
    thief.scale=1.8;

    guard=createSprite(200,850);
    guard.addAnimation("guard",guardimg);
    guard.scale=0.8;

    players=[thief,guard];

  }

  play(){

    form.hide();

    background(bg);

    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      console.log("HERE");
      var index = 0;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x= index * 200 + allPlayers[plr].distance;
        console.log(x);
        y= allPlayers[plr].y;

        players[index-1].x=x;
        players[index-1].y=y;
        

     //   y = displayHeight - allPlayers[plr].distance;


        if (index === player.index)
        {

          camera.position.x = players[index-1].x ;
          camera.position.y = y;

          fill("red");
          ellipse(x,y,80,80)
        }

        
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index!==null)
    {
      console.log(player.distance)

      player.distance += 10;
      
      player.update();
    }

    drawSprites();
  }

  end()
  {
    alert("GAME ENDED ! \n Player Rank is : "+ player.rank)

    gameState=0;
  }
  
}
