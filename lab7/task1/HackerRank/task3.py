#Link: https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true
if __name__ == '__main__':
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([name, score])
       
records.sort(key = lambda x: (x[1], x[0]))


lowest = records[0][1]

for i in records:
    if lowest < i[1]:
        lowest = i[1]
        break

for i in records:
    if(i[1] == lowest):
        print(i[0])
