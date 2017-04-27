def race(a, b, lead):
    if a < b :
        diff = lead/(b/3600-a/3600)
        m, s = divmod(diff, 60)
        h, m = divmod(m, 60)
        return [int(h),int(m),int(s)]
    else:
        return None
