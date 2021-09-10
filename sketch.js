const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   player_base= new PlayerBase(220, random(450, height - 200),180, 150)
   computer_base= new ComputerBase(width - 250, random(450, height - 300),180, 150)
   player= new Player(285,player_base.body.position.y - 70, 50, 180)
   computer_player= new ComputerPlayer(width - 180,computer_base.body.position.y - 70, 50, 180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   player_base.display()
   computer_base.display()

   //display Player and computerplayer
   player.display()
   computer_player.display()



}
