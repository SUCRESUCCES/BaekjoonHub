def solution(num_list):
    s = sum(num_list)
    p = 1
    for x in num_list:
        p *= x
    return 1 if p < s * s else 0