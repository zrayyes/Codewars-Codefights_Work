public static int[] nbMonths(int startPriceOld, int startPriceNew, int savingperMonth, double percentLossByMonth) {
  int have = 0;
  int month = 0;
  float old_car = startPriceOld;
  float new_car = startPriceNew;
  float need = new_car - old_car;
  while (need > have){
    month +=1;
    if((month%2)==0){
      percentLossByMonth += 0.5;
    }
    have += savingperMonth;
    old_car *= (100-percentLossByMonth);
    new_car *=(100-percentLossByMonth);
    need = new_car - old_car;      
  }
  int[] data = {month, 0-need};
  return data;
}
