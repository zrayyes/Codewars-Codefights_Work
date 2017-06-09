function robot(skinScan) {
  for (var i = 0; i < skinScan.length; i++) {
    for (var j = 0; j < skinScan[i].length; j++) {
      skinScan[i][j] = (skinScan[i][j]).replace('X', '*');
    }
  }
  return skinScan;
}
