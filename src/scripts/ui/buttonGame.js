class ButtonGame {
  constructor(text, positionX, positionY) {
    this.text = text;
    this.positionX = positionX;
    this.positionY = positionY;

    this.button = createButton(this.text);
    this.button.addClass("button-start-screen");
    this.button.mousePressed(() => {
      this._changeScene();
    });
  }

  draw() {
    this.button.position(this.positionX, this.positionY);
    this.button.center("horizontal");
  }

  _changeScene() {
    this.button.remove();
    currentScene = "game";
  }
}
