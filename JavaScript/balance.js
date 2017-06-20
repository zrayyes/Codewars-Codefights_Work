function groupCheck(s) {
  var r = /\{\}|\[\]|\(\)/;
  while (r.test(s))
    s = s.replace(r, '');
  return !s.length;
}
