class Game {
  constructor() {
    this.enemys = [];
    this.colliding;

    this.currentEnemy = 0;
    this.map = {
      enemys: [
        { enemy: 0, speed: 10 },
        { enemy: 1, speed: 30 },
        { enemy: 1, speed: 15 },
        { enemy: 2, speed: 40 },
      ],
    };
  }

  setup() {
    scenario = new Scenario(imageScenario, 5);
    scores = new Score();
    life = new Life(3, 3);

    this._createLiveElements();
  }

  keyPress(key) {
    if (key === "ArrowUp") person.jump();
    if (key === "ArrowRight") person.run();
  }

  draw() {
    scenario.display();
    scenario.move();

    life.draw();

    scores.display();
    scores.addPoint();
    person.display();
    person.applyGravity();

    const currentLine = this.map.enemys[this.currentEnemy];
    const enemy = this.enemys[currentLine.enemy];
    const visibleEnemy = enemy.positionX < -enemy.personWidth;
    enemy.speed = currentLine.speed;

    enemy.display();
    enemy.move();

    if (visibleEnemy) {
      this.currentEnemy++;
      enemy.show();
      if (this.currentEnemy > this.map.enemys.length - 1) {
        this.currentEnemy = 0;
      }
    }

    this._checkCollide(enemy);
  }

  _checkCollide(enemy) {
    this.colliding = person.colliding(enemy);
    if (this.colliding) {
      life.removeLife();
      person.stayInvincible();

      if (life.lifes === 0) {
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

  _createLiveElements() {
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
      10
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
      10
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
      10
    );

    this.enemys.push(dropletEnemy);
    this.enemys.push(trollEnemy);
    this.enemys.push(flyDropletEnemy);
  }
}
