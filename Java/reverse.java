public class DescendingOrder {
  public static int sortDesc(final int num) {
  
    if (num == 0)
    {
      return 0;
    }
    else
    {
      int length = (int)(Math.log10(num)+1);
      int reverse = 0;
      int not_num = num;
      int temp1;
      for(int x = 0; x < length; x = x + 1) 
      {
         temp1 = not_num%10;
         reverse = reverse*10;
         reverse = reverse+temp1;
         not_num = not_num/10;
      }
      return reverse;
    }
  }
}
