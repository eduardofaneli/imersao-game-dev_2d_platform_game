let scenario;
let person;

let imageScenario;
let imagePerson;

let gameTrack;

function preload() {
  imageScenario = loadImage("assets/images/scenario/forest.png");
  imagePerson = loadImage("assets/images/persons/witcher_run.png");
  gameTrack = loadSound("assets/sounds/game_track.mp3");
}

function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  frameRate(40);

  createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 5);
  person = new Person(imagePerson);

  gameTrack.loop();
}

function draw() {
  scenario.display();
  scenario.move();

  person.display();
}
