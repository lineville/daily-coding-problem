
// * Daily Coding Problem Jan 17 2022

// * [Easy] -- Square

// The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N.
//  The method is to take increasingly larger prime numbers, and mark their multiples as composite.

// For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of two),
//  then [6, 9, 12, ...] (multiples of three), and so on. Once we have done this for all primes less 
// than N, the unmarked numbers that remain will be prime.

// ! Implement the sieve of eratosthenes


public class Program
{
    public static void Main(string[] args)
    {
        int[] primes = SieveOfEratosthenes(100);
        foreach (int prime in primes)
        {
            Console.WriteLine(prime);
        }
    }

    public static int[] SieveOfEratosthenes(int max)
    {
        bool[] isComposite = new bool[max + 1];
        for (int i = 2; i <= max; i++)
        {
            if (!isComposite[i])
            {
                for (int j = i * i; j <= max; j += i)
                {
                    isComposite[j] = true;
                }
            }
        }

        List<int> primes = new List<int>();
        for (int i = 2; i <= max; i++)
        {
            if (!isComposite[i])
            {
                primes.Add(i);
            }
        }

        return primes.ToArray();
    }
}
