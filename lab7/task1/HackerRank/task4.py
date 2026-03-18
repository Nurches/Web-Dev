#Link: https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true
if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    count = len(student_marks[query_name])
    sum_all = 0
    for i in student_marks[query_name]:
        sum_all+=i
    avg = sum_all/count
    print(f"{avg:.2f}")