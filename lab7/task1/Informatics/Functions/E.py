def add_brackets(s):
    if len(s) <= 2:
        return s
    return s[0] + '(' + add_brackets(s[1:-1]) + ')' + s[-1]

s = input()
print(add_brackets(s))