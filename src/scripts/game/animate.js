class Animate {
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
    this.array = array;
    this.img = img;
    this.personWidth = personWidth;
    this.personHeight = personHeight;
    this.positionX = positionX;
    this.variationY = variationY;
    this.positionY = height - this.personHeight - this.variationY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.currentFrame = 0;
  }

  display() {
    image(
      this.img,
      this.positionX,
      this.positionY,
      this.personWidth,
      this.personHeight,
      this.array[this.currentFrame][0],
      this.array[this.currentFrame][1],
      this.widthSprite,
      this.heightSprite
    );
    this.animate();
  }

  animate() {
    this.currentFrame >= this.array.length - 1
      ? (this.currentFrame = 0)
      : this.currentFrame++;
  }
}
