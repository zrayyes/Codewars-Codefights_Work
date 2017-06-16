function encode(string, n) {
  var output = [];
  var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var counter = 0;
  for (letter in string) {
    if (counter === (n.toString().length)) {
      counter = 0;
    }
    output.push(alpha.indexOf(string[letter]) + 1 + Number(String(n).charAt(counter)));
    counter += 1;
  }
  return output;
}

/*
function encode(str, n) {
  const key = String(n)
  return Array.from(str, (c, i) => c.charCodeAt(0) - 96 + Number(key[i % key.length]))
}
*/
