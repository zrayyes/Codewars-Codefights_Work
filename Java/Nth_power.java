public static int nthPower(int[] array, int n) {
  if (n < array.length){
    return (int)Math.pow(array[n],n);
  }
  return -1;
}

// Shorter Version
// return n >= array.length ? -1 : (int) Math.pow(array[n], n);
