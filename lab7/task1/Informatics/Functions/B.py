def max_digit(s):
    if len(s) == 1:
        return int(s[0])
    
    return max(int(s[0]), max_digit(s[1:]))

s = input()
print(max_digit(s))