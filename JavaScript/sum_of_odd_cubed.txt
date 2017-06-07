function cubeOdd(arr) {
  var output = 0;
  var val = 0;
  for (number in arr) {
    val = arr[number];
    if (isFinite(val)) {
      output += (val % 2) ? Math.pow(val, 3) : 0;
    } else {
      return undefined;
    }
  }

  return output;
}
