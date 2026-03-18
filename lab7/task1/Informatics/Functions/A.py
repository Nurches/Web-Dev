def can(n):
    if n == 1:
        return True
    if n < 1:
        return False
    return can(n - 3) or can(n - 5)

n = int(input())

print("YES" if can(n) else "NO")