def is_prime(num):
    if num < 2: 
         return False
    if num % 2 == 0:             
         return num == 2  # return False
    k = 3
    while k*k <= num:
        if num % k == 0:
             return False
        k += 2
    return True

#### 2 Line version (not mine)
#def is_prime(num):
#    return num > 1 and not any(num % n == 0 for n in range(2,num))
