
# * Daily Coding Problem February 4th 2021

# * [Easy] -- Dropbox

# * What does the below code snippet print out?
# * How can we fix the anonymous functions to behave as we'd expect?

# Bad version

# functions = []
# for i in range(10):
#     functions.append(lambda: i)

# for f in functions:
#     print(f())

# Prints 9, 9, 9, 9, 9, 9 ...


# Fixed Version -- just passes i explicitly as function arg

functions = []
for i in range(10):
    functions.append(lambda i=i: i)

for f in functions:
    print(f())
