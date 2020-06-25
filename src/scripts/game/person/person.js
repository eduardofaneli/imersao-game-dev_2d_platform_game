class Person extends Animate {
  constructor(
    array,
    img,
    positionX,
    personWidth,
    personHeight,
    widthSprite,
    heightSprite
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

    this.initialY = height - this.personHeight;
    this.positionY = this.initialY;
    this.gravity = 3;
    this.jumpSpeed = 0;
  }

  jump() {
    this.jumpSpeed = -30;
    jumpSound.play();
  }

  applyGravity() {
    this.positionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.positionY > this.initialY) this.positionY = this.initialY;
  }

  colliding(enemy) {
    const precision = 0.7;
    return collideRectRect(
      this.positionX,
      this.positionY,
      this.personWidth * precision,
      this.personHeight * precision,
      enemy.positionX,
      enemy.positionY,
      enemy.personWidth * precision,
      enemy.personHeight * precision
    );
  }
}
