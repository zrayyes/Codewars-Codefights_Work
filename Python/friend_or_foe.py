def friend(x):
    friends = []
    for guy in x:
        if (len(guy) == 4):
            friends.append(guy)
    return friends

# return [f for f in x if len(f) == 4]    
