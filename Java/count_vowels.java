public static int getCount(String str) {
  int vowelsCount = 0;

  for (char ch : str.toCharArray()){
    if (ch == 'a' || ch == 'e'  || ch == 'o'  || ch == 'i'  || ch == 'u'){vowelsCount++;}
  }

  return vowelsCount;
}

// Shorter Version
// return str.replaceAll("(?i)[^aeiou]", "").length();
