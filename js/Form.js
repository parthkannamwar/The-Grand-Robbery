class Form {

  constructor() {
    this.input = createInput("Your Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');

    this.reset=createButton("RESET");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

  }

  display(){

    textSize(100)

    this.input.position(1450 , 500);
    this.input.size(400,20);
   // this.input.setAttribute('size',160);
    this.button.position(1570,600);
    this.button.size(150,50)
    this.reset.position(2200,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(1550, 500);

    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.removePlayerInfo();

      
    })

  }
}
