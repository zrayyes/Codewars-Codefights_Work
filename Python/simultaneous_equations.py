import numpy as np

def solve_eq(eq):
    a = np.array([[eq[0][0], eq[0][1], eq[0][2]], [eq[1][0], eq[1][1], eq[1][2]], [eq[2][0], eq[2][1], eq[2][2]]])
    b = np.array([eq[0][3], eq[1][3], eq[2][3]])
    alist = np.linalg.solve(a, b).tolist()
    alist = [ round(x) for x in alist ]
    return (alist)
