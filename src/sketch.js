let scenario;
let person;
let enemy;

let imageScenario;
let imagePerson;
let imageEnemy;

let gameTrack;
let jumpSound;

function preload() {
  imageScenario = loadImage("assets/images/scenario/forest.png");
  imagePerson = loadImage("assets/images/persons/witcher_run.png");
  imageEnemy = loadImage("./assets/images/enemys/droplet.png");
  gameTrack = loadSound("assets/sounds/game_track.mp3");
  jumpSound = loadSound("assets/sounds/jump_sound.mp3");
  arrayDroplet = defineSprites(7, 4, 104, 104);
  arrayPerson = defineSprites(4, 4, 220, 270);
}

function touchStarted() {
  getAudioContext().resume();
  person.jump();
}

function keyPressed() {
  if (key === "ArrowUp") person.jump();
}

function setup() {
  frameRate(40);

  createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 5);
  person = new Person(
    (array = arrayPerson),
    (img = imagePerson),
    (positionX = 0),
    (personWidth = 110),
    (personHeight = 135),
    (widthSprite = 220),
    (heightSprite = 270)
  );
  enemy = new Enemy(
    (array = arrayDroplet),
    (img = imageEnemy),
    (positionX = width - 52),
    (personWidth = 52),
    (personHeight = 52),
    (widthSprite = 104),
    (heightSprite = 104),
    (speed = 7)
  );

  gameTrack.loop();
}

function draw() {
  scenario.display();
  scenario.move();

  person.display();
  person.applyGravity();

  enemy.display();
  enemy.move();

  if (person.colliding(enemy)) {
    gameTrack.stop();
    noLoop();
  }
}
