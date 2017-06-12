function sumArray(array) {
  for (
    var
      index = 0, // The iterator
      length = array.length, // Cache the array length
      sum = 0; // The total amount
    index < length; // The "for"-loop condition
    sum += array[index++] // Add number on each iteration
  );
  return sum;
}

function shortestArrang(n) {
  var counter = (n % 2 === 0) ? n / 2 : parseInt((n / 2).toFixed(0));
  var alist = [];
  while (sumArray(alist) !== n && counter >= 1) {
    if (sumArray(alist) < n) {
      alist.push(counter);
      counter--;
    } else if (sumArray(alist) > n) {
      alist.shift();
    }
  }
  return sumArray(alist) === n ? alist : [-1];
}


/*
function shortestArrang(n){
  for(let l=2; l*l<2*n; l++) if(2*(n/l%1)===(l+1)%2) return [...Array(l)].map((_,i)=>(n/l)+(l-1)/2-i)
  return [-1];
}
*/
