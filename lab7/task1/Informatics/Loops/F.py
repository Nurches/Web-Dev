x = int(input())

rev = 0
for _ in range(len(str(x))):
    rev = rev * 10 + x % 10
    x //= 10

print(rev)