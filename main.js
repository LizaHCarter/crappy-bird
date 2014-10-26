var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

// Create our 'main' state that will contain the game
var mainState = {

function preload(){
    game.stage.backgroundColor = '#71c5cf';

    game.load.image('bird', 'assets/bird.png');
},

function create(){
      // Set the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Display the bird on the screen
    this.bird = this.game.add.sprite(100, 245, 'bird');

    // Add gravity to the bird to make it fall
    game.physics.arcade.enable(this.bird);
    this.bird.body.gravity.y = 1000;

    // Call the 'jump' function when the spacekey is hit
    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
},

function update(){
  // If the bird is out of the world (too high or too low), call the 'restartGame' function
    if (this.bird.inWorld == false)
        this.restartGame();
},
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);
game.state.start('main');
