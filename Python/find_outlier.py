def find_outlier(integers):
    odd = []
    even = []
    for i in integers:
        if i%2 == 0:
            even.append(i)
        else:
            odd.append(i)
    if len(odd) == 1 and even > 1:
        return odd[0]
    elif len(even) == 1 and odd > 1:
        return even[0]
