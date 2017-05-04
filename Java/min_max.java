public int min(int[] list) {
  int minimum = list[0];
  for (int i : list){
    if(i < minimum){
      minimum = i;
    }
  }
  return minimum;
}

public int max(int[] list) {
  int maximum = list[0];
  for (int i : list){
    if(i > maximum){
      maximum = i;
    }
  }
  return maximum;
}
  
// Best Answer (not mine)
/*
import java.util.Arrays;
public int min(int[] list) {
  return Arrays.stream(list).min().getAsInt();
}

public int max(int[] list) {
  return Arrays.stream(list).max().getAsInt();
}
*/
