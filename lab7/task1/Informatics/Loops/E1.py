a = float(input())
n = int(input())

s = 1
current = 1

for _ in range(n):
    current *= a
    s += current

print(s)