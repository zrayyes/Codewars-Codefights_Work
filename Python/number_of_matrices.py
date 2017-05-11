import collections
import math

def count_perms(matrix):
    length = sum([len(x) for x in matrix])
    cnt = collections.Counter()
    for row in matrix:
        for entry in row:
            cnt[entry] += 1 
    div = (reduce(lambda x, y: x*y, [math.factorial(x) for x in cnt.values()]))
    return math.factorial(length)/div
