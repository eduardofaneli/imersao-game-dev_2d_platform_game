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
    this.invincible = false;
  }

  jump() {
    if (this.jumpCount < this.maxJumps) {
      this.jumpSpeed = this.jumpHeight;
      jumpSound.play();
      this.jumpCount++;
    }
  }

  run() {
    this.positionX++;
  }

  applyGravity() {
    this.positionY += this.jumpSpeed;
    this.jumpSpeed += this.gravity;

    if (this.positionY > this.initialY) {
      this.positionY = this.initialY;
      this.jumpCount = 0;
    }
  }

  stayInvincible() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 2000);
  }

  colliding(enemy) {
    if (this.invincible) return false;

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
