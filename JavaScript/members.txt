function openOrSenior(data) {
  output = [];
  for (entry in data) {
    if (data[entry][0] >= 55 && data[entry][1] > 7) {
      output.push('Senior');
    } else {
      output.push('Open');
    }
  }
  return output;
}

/* Shorter Version:
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
*/
