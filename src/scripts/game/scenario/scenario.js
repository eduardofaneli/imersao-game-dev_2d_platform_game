class Scenario {
  constructor(img, speed) {
    this.image = img;
    this.speed = speed;
    this.firstScenarioX = 0;
    this.secondScenarioX = width;
  }

  display() {
    image(this.image, this.firstScenarioX, 0, width, height);
    image(this.image, this.secondScenarioX, 0, width, height);
  }

  move() {
    this.firstScenarioX = this.firstScenarioX - this.speed;
    this.secondScenarioX = this.secondScenarioX - this.speed;

    this.firstScenarioX = this._updateDisplay(this.firstScenarioX);
    this.secondScenarioX = this._updateDisplay(this.secondScenarioX);
  }

  _updateDisplay(scenarioX) {
    return scenarioX < -width ? width : scenarioX;
  }
}
