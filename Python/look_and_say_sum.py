def lookandsay(number):
  num = str(number)
  result = ""
  repeat = num[0]
  num = num[1:]+" "
  times = 1
  for actual in num:
      if actual != repeat:
          result += str(times)+repeat
          times = 1
          repeat = actual
      else:
          times += 1
  return result

    
def look_and_say_and_sum(n):
    if n==1:
        return 1
    else:
        counter = 0
        result = lookandsay(1)
        for i in range(n-2):
            result = lookandsay(result)
        for char in str(result):
            counter += int(char)
        return counter
                
