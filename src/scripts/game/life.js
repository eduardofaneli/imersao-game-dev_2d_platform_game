class Life {
  constructor(max, start) {
    this.max = max;
    this.start = start;
    this.lifes = this.start;

    this.width = 25;
    this.height = 25;
    this.initialX = 20;
    this.y = 20;
  }

  draw() {
    for (let index = 0; index < this.lifes; index++) {
      const margin = index * 10;
      const position = this.initialX * (1 + index);

      image(imageLife, position + margin, this.y, this.width, this.height);
    }
  }

  addLife() {
    if (this.lifes < this.max) this.lifes++;
  }

  removeLife() {
    this.lifes--;
  }
}
