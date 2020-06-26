function loadAssets() {
  imageScenario = loadImage("./assets/images/scenario/forest.png");
  imagePerson = loadImage("./assets/images/persons/witcher_run.png");
  imageDroplet = loadImage("./assets/images/enemys/droplet.png");
  imageTroll = loadImage("./assets/images/enemys/troll.png");
  imageFlyDroplet = loadImage("./assets/images/enemys/fly-droplet.png");
  imageGameOver = loadImage("./assets/images/assets/game-over.png");
  imageStartScreen = loadImage("./assets/images/assets/home-screen.png");
  imageLife = loadImage("./assets/images/assets/heart.png");

  fontStartScreen = loadFont("./assets/images/assets/font-home_screen.otf");

  gameTrack = loadSound("assets/sounds/game_track.mp3");
  jumpSound = loadSound("assets/sounds/jump_sound.mp3");

  arrayDroplet = defineSprites(7, 4, 104, 104);
  arrayPerson = defineSprites(4, 4, 220, 270);
  arrayTroll = trollArray; //defineSprites(5, 5, 400, 400);
  arrayFlyDroplet = flyDropletArray; //defineSprites(5, 3, 200, 150);
}
