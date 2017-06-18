String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function maskify(cc) {
  if (cc.length < 5){
    return cc;
  } else {
    var not_cc = cc;
    for (var i= 0; i < cc.length - 4; i++){
      not_cc = not_cc.replaceAt(i,'#');
    }
    return not_cc;
  }
}

/* Shorter Version
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/
