function defineSprites(lines, collumns, width, heigth) {
  array = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < lines * collumns; i++) {
    array[i] = [x * width, y * heigth];
    if ((i + 1) % collumns == 0) {
      y += 1;
      x = 0;
    } else x += 1;
  }
  return array;
}
