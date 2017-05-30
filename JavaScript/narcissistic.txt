function narcissistic( value ) {
  var s_number = String(value);
  var len = s_number.length;
  var narc = 0;
  for (var i = 0; i < len; i++) {
    narc += Math.pow(Number(s_number[i]), len);
  }
  if(value === narc){
    return true;
  } else {
    return false;
  }
}
