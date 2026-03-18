#https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true
def swap_case(s):
    new_text = ""
    for i in s:
        if i>="a" and i<="z":
            new_text+=i.upper()
        elif i>="A" and i<="Z":
            new_text+=i.lower()
        else:
            new_text += i
    return new_text

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)