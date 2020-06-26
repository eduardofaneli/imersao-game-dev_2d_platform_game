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
    speed = 10
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
    this.positionX = width;
  }

  move() {
    this.positionX = this.positionX - this.speed;
  }

  show() {
    this.positionX = width;
  }
}
