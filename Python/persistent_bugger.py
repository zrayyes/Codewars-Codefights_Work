def persistence(n):
    digits = str(n)
    counter = 0
    while (len(digits) > 1):
        temp = 1
        for i in range(len(digits)):
            temp = temp * int(digits[i])
        digits = str(temp)
        counter += 1
    return counter
