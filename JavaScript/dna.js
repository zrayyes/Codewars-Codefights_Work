function DNAStrand(dna){
  var new_dna = [];
  var letter = 'A';
  for (var i = 0; i < dna.length; i++) {
    letter = dna[i];
    if (letter === 'A'){
      new_dna.push('T');
    } else if (letter === 'T'){
      new_dna.push('A');
    } else if (letter === 'G'){
      new_dna.push('C');
    } else if (letter === 'C'){
      new_dna.push('G');
    }
  
  }
  return (new_dna.join(""));
}
