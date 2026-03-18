#Link: https://www.hackerrank.com/challenges/python-lists/problem?isFullScreen=true
if __name__ == '__main__':
    N = int(input())
    arr = []
    for i in range(N):
        
        arr_com = input().split()
        com = arr_com[0]
        if(com == "append"):
            arr.append(int(arr_com[1]))
        elif(com == "insert"):
            arr.insert(int(arr_com[1]), int(arr_com[2]))
        elif(com == "remove"):
            arr.remove(int(arr_com[1]))
        elif(com == "sort"):
            arr.sort()
        elif(com == "print"):
            print(arr)
        elif(com == "pop"):
            arr.pop()
        else:
            arr.reverse()
    