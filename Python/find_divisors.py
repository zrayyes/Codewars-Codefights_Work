def divisors(integer):
    half = int(integer/2)
    list = []
    for i in range(2,half+1):
        if integer % i == 0:
            list.append(i)
    if not list:
        return (str(integer)+' is prime')
    else:
        return (list)