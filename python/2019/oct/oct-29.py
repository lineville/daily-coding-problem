# Daily Coding Problem Oct 29
# Liam Neville

# Given a stream of elements (numbers) too large to store in memory (we only have access to one element at a time)
# Pick a random element from the stream with uniform probability
# => 1, 4, 3, 4, 5, 7, 8, ... nums => randElement() => 3.
# => 1, 4, 3, 4, 5, 7, 8, ... nums => randElement() => 8.


def flatten_json(y):
    out = {}

    def flatten(x, name=''):
        if type(x) is dict:
            for a in x:
                flatten(x[a], name + a + '_')
        elif type(x) is list:
            i = 0
            for a in x:
                flatten(a, name + str(i) + '_')
                i += 1
        else:
            out[name[:-1]] = x

    flatten(y)
    return out

json = { 'i': { 'am': { 'a': { 'nested': 'object'}, 'b': {'c': 'd'}}}}
print(flatten_json(json))