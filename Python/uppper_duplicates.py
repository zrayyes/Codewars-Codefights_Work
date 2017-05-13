def reverse(name):
    new = list(name)
    temp = []
    for i in range(len(new)-1):
        if(new[i] == new[i+1]):
            temp.append(new[i])
            temp.append(new[i+1])
    for i in temp:
        print(i)
        if(new[i].isupper()):
            new[i] = new[i].lower()
        else:
            new[i] = new[i].upper()
    return(''.join(new))
