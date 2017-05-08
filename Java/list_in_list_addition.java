
public static int sumOfElements(int matrix[][]) {
    int sum = 0;
    for (int[] i : matrix){
        for (int j : i){ 
            sum += j;
        }       
    }
    return sum;
}    

// Shorter Version
// return Arrays.stream(matrix).flatMapToInt(Arrays::stream).sum();
