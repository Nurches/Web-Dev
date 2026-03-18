#Link to the task: https://www.hackerrank.com/challenges/default-arguments/problem?isFullScreen=true
class EvenStream:
    def __init__(self):
        self.current = 0

    def get_next(self):
        to_return = self.current
        self.current += 2
        return to_return


class OddStream:
    def __init__(self):
        self.current = 1

    def get_next(self):
        to_return = self.current
        self.current += 2
        return to_return

def print_from_stream(a, stream=None):
    if(stream is None):
        stream = EvenStream()
    
    for i in range(a):
        print(stream.get_next())
        
n = int(input())
for i in range(n):
    items = input().split()
    stream = items[0]
    a = int(items[1])
    if stream == "odd":
        print_from_stream(a, OddStream())
    else:
        print_from_stream(a)
    