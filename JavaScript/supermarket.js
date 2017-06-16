function queueTime(customers, n) {
  var counter = 0;
  n = (n > customers.length) ? customers.length : n;
  while (customers[0] > 0) {
    counter++;
    console.log(customers);
    for(var i =0; i < n; i++){
       customers[i] --;
       if (customers[i] < 1) {customers.splice(i, 1);}
    }
    
  }
  return counter;
}
