
# * Daily Coding Problem August 18 2020

# * [Hard] -- Quantcast

# * You are presented with an array representing a Boolean expression. The elements are of two kinds:

# T and F, representing the values True and False.
# &, |, and ^, representing the bitwise operators for AND, OR, and XOR.
# * Determine the number of ways to group the array elements using parentheses so that the entire expression evaluates to True.

from enum import Enum


class Token(Enum):
    True
    False
    OR
    AND
    XOR


def main():
    expression = ["F", "|", "T", "&", "T"]
    print(f"Expression: {expression}")
