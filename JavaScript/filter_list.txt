function filter_list(l) {
  var output = [];
  for (var i = 0; i < l.length; i++) {
    if (l[i] === parseInt(l[i], 10)) {
      output.push(l[i]);
    }
  }
  return output;
}

// Shorter
/*
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
*/
