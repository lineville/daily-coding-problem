# So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

# The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
# The values are the price (in US dollars) of one share of Apple stock at that time.
# So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

# Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

# For example:

#   stock_prices = [10, 7, 5, 8, 11, 9]

# get_max_profit(stock_prices)
# # Returns 6 (buying for $5 and selling for $11)






import sys

def get_max_profit(stock_prices):
    assert(len(stock_prices) > 1)

    # Calculate the max profit
    
    buyAt = stock_prices[0]
    bestProfit = stock_prices[1] - buyAt
    i = 1
    while i < len(stock_prices):
        price = stock_prices[i]
        profit = price - buyAt
        
        if profit > bestProfit:
            bestProfit = profit
        
        if price < buyAt:
            buyAt = price
        i += 1
            

    return bestProfit





# Tests

import unittest

class Test(unittest.TestCase):

    def test_price_goes_up_then_down(self):
        actual = get_max_profit([1, 5, 3, 2])
        expected = 4
        self.assertEqual(actual, expected)

    def test_price_goes_down_then_up(self):
        actual = get_max_profit([7, 2, 8, 9])
        expected = 7
        self.assertEqual(actual, expected)

    def test_price_goes_up_all_day(self):
        actual = get_max_profit([1, 6,7, 9])
        expected = 8 
        self.assertEqual(actual, expected)

    def test_price_goes_down_all_day(self):
        actual = get_max_profit([9, 7, 4, 1])
        expected = -2
        self.assertEqual(actual, expected)

    def test_price_stays_the_same_all_day(self):
        actual = get_max_profit([1, 1, 1, 1])
        expected = 0
        self.assertEqual(actual, expected)

    def test_error_with_empty_prices(self):
        with self.assertRaises(Exception):
            get_max_profit([])

    def test_error_with_one_price(self):
        with self.assertRaises(Exception):
            get_max_profit([1])


unittest.main(verbosity=2)