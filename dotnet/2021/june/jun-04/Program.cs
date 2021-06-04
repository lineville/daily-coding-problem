using System;
using System.Collections.Generic;
using System.Linq;

// The number 6174 is known as Kaprekar's contant, after the mathematician who 
// discovered an associated property: for all four-digit numbers with at least 
// two distinct digits, repeatedly applying a simple procedure eventually results in this value.
// The procedure is as follows:

// For a given input x, create two new numbers that consist of the digits in x in 
// ascending and descending order. Subtract the smaller number from the larger number.

namespace jun_04
{
    class Program
    {

        private static readonly int KAPREKAR_CONSTANT = 6174;

        /// <summary>
        /// Computes the number of steps it takes to reduce n to KAPREKAR_CONSTANT
        /// </summary>
        /// <param name="n">A four digit number with at least two distinct digits</param>
        /// <returns>Steps it takes to convert n to KAPREKAR_CONSTANT</returns>
        private static int StepsToKaprekar(int n)
        {
            int current = n;
            int steps = 0;

            while (current != KAPREKAR_CONSTANT)
            {
                IEnumerable<int> digits = current.ToString().Select(digit => int.Parse(digit.ToString()));
                
                int ascending = int.Parse(string.Join("", digits.OrderBy(n => n)));
                int descending = int.Parse(string.Join("", digits.OrderByDescending(n => n)));

                int larger = Math.Max(ascending, descending);
                int smaller = Math.Min(ascending, descending);

                current = larger - smaller;
                steps++;
                Console.WriteLine(current);
            }
            return steps;
        }


        static void Main(string[] args)
        {
            int n = 9875;
            Console.WriteLine($"n = {n}");
            Console.WriteLine($"steps = {StepsToKaprekar(n)}");
        }
    }
}
