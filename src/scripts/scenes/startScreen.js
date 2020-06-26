class StartScreen {
  constructor() {}

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage() {
    image(imageStartScreen, 0, 0, width, height);
  }
  _text() {
    textFont(fontStartScreen);
    textAlign(CENTER);
    textSize(100);
    text("The Hipsta", width / 2, height / 3);
    textSize(50);
    text("adventures", width / 2 + 150, (height / 5) * 2);
  }

  _button() {
    // buttonGame.positionY = (height / 7) * 5;
    buttonGame.draw();
  }
}
