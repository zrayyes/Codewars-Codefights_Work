public static String repeatStr(final int repeat, final String string) {
  if (repeat > 0){
    String bigstring = string;
    for(int i = 1; i < repeat;i++){
      bigstring = bigstring + string;
    }
    return bigstring;
  }else{
    return "";
  }
}
