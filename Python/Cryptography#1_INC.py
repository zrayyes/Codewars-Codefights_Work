import string
def caesar_crypto_encode(text, shift):
    shifter = abs(shift)
    sign = True if shift > 0 else False
    abc = list(string.ascii_lowercase) + list(string.ascii_uppercase)
    crypted = ''
    if not text or text.isspace() : return ''
    while shifter > len(abc):
    for letter in text:
        if letter in abc:
            index = abc.index(letter)
            crypted += abc[index+shifter]
        else:
            crypted += letter
    return crypted
