import math

def gcd(a, b):
  c = a % b
  while(c > 0):
    a = b
    b = c
    c = a % b
  return b


def greedy_egyptian_fraction(num, den, denominators = [], index = 0):
  if(num == 1):
    denominators.append(den)
  else:
    unit_den = math.ceil(den / num)
    denominators.append(unit_den)
    gcd_of_numbers = gcd((num * unit_den) - den, den * unit_den)
    greedy_egyptian_fraction(((num * unit_den) - den) // gcd_of_numbers, (den * unit_den) // gcd_of_numbers, denominators, index + 1)
  
  return denominators


if __name__ == '__main__':
  result = greedy_egyptian_fraction(4, 13)
  print("Egyptian fraction of 4 / 13")

  for num in result:
    print(f"1 / {num}")