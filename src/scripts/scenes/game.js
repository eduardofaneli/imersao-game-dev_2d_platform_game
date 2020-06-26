class Game {
  constructor() {
    this.currentEnemy = 0;
    this.enemys = [];
  }

  setup() {
    scenario = new Scenario(imageScenario, 5);
    scores = new Score();

    person = new Person(arrayPerson, imagePerson, 0, 30, 110, 135, 220, 270);
    const dropletEnemy = new Enemy(
      arrayDroplet,
      imageDroplet,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10,
      0
    );

    const trollEnemy = new Enemy(
      arrayTroll,
      imageTroll,
      width,
      0,
      200,
      200,
      400,
      400,
      10,
      0
    );

    const flyDropletEnemy = new Enemy(
      arrayFlyDroplet,
      imageFlyDroplet,
      width - 52,
      130,
      100,
      75,
      200,
      150,
      10,
      0
    );

    this.enemys.push(dropletEnemy);
    this.enemys.push(trollEnemy);
    this.enemys.push(flyDropletEnemy);
  }

  keyPress(key) {
    if (key === "ArrowUp") person.jump();
  }

  draw() {
    scenario.display();
    scenario.move();
    scores.display();
    scores.addPoint();
    person.display();
    person.applyGravity();
    const enemy = this.enemys[this.currentEnemy];
    const visibleEnemy = enemy.positionX < -enemy.personWidth;
    enemy.display();
    enemy.move();

    if (visibleEnemy) {
      this.currentEnemy++;
      if (this.currentEnemy > this.enemys.length - 1) {
        this.currentEnemy = 0;
        enemy.speed = parseInt(random(10, 30));
      }
    }
    if (person.colliding(enemy)) {
      gameTrack.stop();
      image(
        imageGameOver,
        width / 2 - imageGameOver.width / 2,
        height / 2 - imageGameOver.height / 2
      );
      noLoop();
    }
  }
}
