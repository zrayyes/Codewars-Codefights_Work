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
