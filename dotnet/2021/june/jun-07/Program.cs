using System;

// You have n fair coins and you flip them all at the same time. 
// Any that come up tails you set aside. The ones that come up heads you flip again. 
// How many rounds do you expect to play before only one coin remains?

namespace jun_07
{
    class Program
    {
        private static int RoundsToGetAllHeads(int n)
        {
            // Base case no more coins
            if (n == 0)
            {
                return 0;
            } else {
                // Recursive case flip n coins, call recursively with remaining coins and 1 extra round
                int heads = 0;
                
                for (int i = 0; i < n; i++)
                {
                    bool isHeads = FlipCoin();
                    if (isHeads)
                    {
                        heads++;
                    }
                }
                
                Console.WriteLine($"Heads: {heads}/{n}");
                return RoundsToGetAllHeads(n - heads) + 1;
            }
        }


        /// <summary>
        /// Flips a coin
        /// </summary>
        /// <returns>Returns true/false 50% of the time</returns>
        private static bool FlipCoin()
        {
            Random random = new Random();
            return random.Next(0, 2) == 0;
        }

        static void Main(string[] args)
        {
            int n = 100;
            Console.WriteLine($"n = {n}");

            Console.WriteLine($"Rounds to play to get to all heads: {RoundsToGetAllHeads(n)}");
        }
    }
}
