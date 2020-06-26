class Enemy extends Animate {
  constructor(
    array,
    img,
    positionX,
    variationY,
    personWidth,
    personHeight,
    widthSprite,
    heightSprite,
    speed = 10,
    delay
  ) {
    super(
      array,
      img,
      positionX,
      variationY,
      personWidth,
      personHeight,
      widthSprite,
      heightSprite
    );

    this.speed = speed;
    this.delay = delay;
    this.positionX = width + this.delay;
  }

  move() {
    this.positionX < -this.personWidth - this.delay
      ? (this.positionX = width)
      : (this.positionX = this.positionX - this.speed);
  }
}
