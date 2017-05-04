public static boolean getXO (String str) {
  int ohs = 0;
  int xs = 0;
  for (char ch : str.toCharArray()){
    if (ch == 'o' || ch == 'O'){ohs++;}
    else if (ch == 'x' || ch == 'X'){xs++;}

  }
  return (ohs == xs);
}

