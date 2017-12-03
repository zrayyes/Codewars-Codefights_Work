function firstNotRepeatingCharacter(s) {

    for (let i in s) {
        i = Number(i);
        let current = s.charAt(i);
        if (s.indexOf(current) === i && s.indexOf(current, i + 1) === -1) {
            return current;
        }
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));

