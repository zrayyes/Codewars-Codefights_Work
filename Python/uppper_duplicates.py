def reverse(name):
    new = list(name)
    temp = []
    for i in range(len(new)-1):
        if(new[i] == new[i+1]):
            temp.append(i)
            temp.append(i+1)
    temp = list(set(temp))            
    for i in temp:
        if(new[int(i)].isupper()):
            new[int(i)] = new[int(i)].lower()
        else:
            new[int(i)] = new[int(i)].upper()
    return(''.join(new))


# import re
# def reverse(s):
#     return re.sub(r'(.)\1+', lambda m: m.group().swapcase(), s)
