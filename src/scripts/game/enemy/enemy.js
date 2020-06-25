class Enemy extends Animate {
  constructor(
    array,
    img,
    positionX,
    personWidth,
    personHeight,
    widthSprite,
    heightSprite,
    speed = 10
  ) {
    super(
      array,
      img,
      positionX,
      personWidth,
      personHeight,
      widthSprite,
      heightSprite
    );

    this.speed = speed;
  }

  move() {
    this.positionX < -this.personWidth
      ? (this.positionX = width)
      : (this.positionX = this.positionX - this.speed);
  }
}
