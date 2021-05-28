using System;


namespace may_28
{
    class Program
    {
        static void Main(string[] args)
        {
            var largeArray = new int[] {0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 };
            var sparseArray = new SparseArray(largeArray, largeArray.Length);
            Console.WriteLine($"i = 3 --> {sparseArray.Get(3)}");
            Console.WriteLine($"i = 4 --> {sparseArray.Get(4)}");
            
            sparseArray.Set(4, 0);
            Console.WriteLine($"Setting i at 4 to 0");
            Console.WriteLine($"i = 4 --> {sparseArray.Get(4)}");
            
            sparseArray.Set(4, 1);
            Console.WriteLine($"Setting i at 4 to 1");
            Console.WriteLine($"i = 4 --> {sparseArray.Get(4)}");

        }
    }
}
