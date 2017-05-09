def is_divisible_by_6(s):
    output = []
    for i in range (0,10):
        temp = (s.replace('*',str(i)))
        if (int(temp)%6 ==0):
            output.append(temp)
    return output
    
#Shorter Version
#from string import digits
#def is_divisible_by_6(s):
#    return [s.replace('*', digit) for digit in digits if not int(s.replace('*',digit)) % 6]
