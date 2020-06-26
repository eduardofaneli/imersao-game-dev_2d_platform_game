function preload() {
  loadAssets();
}

function touchStarted() {
  getAudioContext().resume();
  person.jump();
}

function keyPressed() {
  game.keyPress(key);
}

function setup() {
  frameRate(40);
  createCanvas(windowWidth, windowHeight);
  gameTrack.loop();
  game = new Game();
  game.setup();

  startScreen = new StartScreen();
  buttonGame = new ButtonGame("Start", width / 2, height / 2);

  scenes = {
    game,
    startScreen,
  };
}

function draw() {
  scenes[currentScene].draw();
}
