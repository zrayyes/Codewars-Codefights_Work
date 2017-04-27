def isValidWalk(walk):
    time = 0
    x = 0
    y = 0
    for direction in walk:
        time += 1
        if time != 10:
            return False
        if direction == 'n' : y=y+1 
        if direction == 's' : y=y-1
        if direction == 'e' : x=x+1 
        if direction == 'w' : x=x-1
        if x == 0 and y == 0:
            return True
        else:
            return False