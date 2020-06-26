class Person extends Animate {
  constructor(
    array,
    img,
    positionX,
    variationY,
    personWidth,
    personHeight,
    widthSprite,
    heightSprite
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
    this.variationY = variationY;
    this.initialY = height - this.personHeight - this.variationY;
    this.positionY = this.initialY;
    this.gravity = 4;
    this.jumpSpeed = 0;
    this.jumpHeight = -40;
    this.jumpCount = 0;
    this.maxJumps = 2;
  }

  jump() {
    if (this.jumpCount < this.maxJumps) {
      this.jumpSpeed = this.jumpHeight;
      jumpSound.play();
      this.jumpCount++;
    }
  }

  applyGravity() {
    this.positionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.positionY > this.initialY) {
      this.positionY = this.initialY;
      this.jumpCount = 0;
    }
  }

  colliding(enemy) {
    const precision = 0.7;
    noFill();
    rect(
      this.positionX,
      this.positionY,
      this.personWidth * precision,
      this.personHeight * precision
    );
    rect(
      enemy.positionX,
      enemy.positionY,
      enemy.personWidth * precision,
      enemy.personHeight * precision
    );
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
