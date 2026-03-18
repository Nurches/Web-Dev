#Link: https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem?isFullScreen=true
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

arr.sort()

b = set()

for i in arr:
    b.add(i)

print(list(b)[-2])