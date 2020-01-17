## * Daily Coding Problem Jan 13th 2020

## * What does the below code snippet print out? 
## * How can we fix the anonymous functions to behave as we'd expect?

## * BAD Version prints 9 9 9 9 9 9 ...
# functions = []
# for i in range(10):
#     functions.append(lambda: i)

# for f in functions:
#     print(f())



## * FIXED Version
# def func(i):
#     def f():
#         print(i)
    # return f

functions = []
for i in range(10):
    def f(i=i):
        print(i)
    functions.append(f)
