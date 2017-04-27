def find_it(seq):
    counter = {}
    for i in seq:
        if i in counter:
            counter[i] += 1
        else:
            counter[i] = 1
    for x in counter:
        if counter[x]%2 : return x