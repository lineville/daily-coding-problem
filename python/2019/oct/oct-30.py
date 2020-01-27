# Daily Coding Problem 
# Oct 30 2019
#You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

# * record(order_id): adds the order_id to the log
# * get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
#! You should be as efficient with time and space as possible.
import string

letters = list(string.ascii_uppercase)


class Order:

    def __init__(self, id, val):
        self.id = id
        self.val = val

    def toStr(self):
        return "Order # " + str(self.id) + " Val: " + self.val + "\n"



class OrderLog:

    
    def __init__(self, logs = []):
        self.logs = logs
    
    def record(self, order_id):
        x = Order(order_id, letters[order_id - 1])
        self.logs.append(x)

    def get_last(self, i):
        return self.logs[len(self.logs) - i]

    def toStr(self):
        logStr = "Logs:\n"
        for log in self.logs:
            logStr += log.toStr()
        return logStr


logs = OrderLog([])
logs.record(1)
logs.record(2)
logs.record(3)
logs.record(4)
logs.record(5)
logs.record(6)
print(logs.toStr())
print(logs.get_last(5).toStr())
print(logs.get_last(4).toStr())
print(logs.get_last(3).toStr())
print(logs.get_last(2).toStr())
print(logs.get_last(1).toStr())
print(logs.get_last(6).toStr())

