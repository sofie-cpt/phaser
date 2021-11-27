var game = new Phaser.game(800, 600, Phaser.AUTO, '',{preload:preload, create:create, update:update});

var score = 0;
var score = 3;

function preload (){
game.load.image('sky','assets/sky.png');
game.load.image('ground','assets/platform.png');
game.load.image('star','assets/star.png');
game.load.spritesheet('due','assets/dude.png', 32, 48);
game.load.spritesheet('baddie','assets/baddie.png', 32, 32);
}
function create (){
    game.physics.startSystem(Phaser.Physics.Arcade);
}
//create the sky 
game.add.sprite(0,0, 'sky');
platforms = game.add.physicsGroup();
platforms.enableBody = true;
//create the ground 
var ground = platform.create(0, 550, 'ground');
ground.scale.setTo(2.2);
ground.body.immovable = true;
//create the ledges 
var ledge = platforms.create(400,400, 'ground');
ledge.body.immovable = true;
ledge = platforms.create(-100, 250, 'ground');
ledge.body.immovable = true;

//set text style 
var style = {font: "bold 32px Arial", fill: "#fff"};
//positioning the score 
scorelabel = game.add.text(300,560, "score: ", style);
scoretext = game.add.text(420, 560, score,style);
scorelabel.setShadow(3,3,'rgba(0,0,0,0.5',2);
scoretext.setShadow(3,3,'rgba(0,0,0,0.5',2);

//positioning the lives 
lifelabel = game.add.text(10, 5, "lives: ", style);
lifetext = game.add.text (120, 5, life,style);
lifelabel.setShadow(3,3,'rgba(0,0,0,0.5',2);
lifetext.setShadow(3,3,'rgba(0,0,0,0.5',2);


function update (){

}