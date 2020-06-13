using System;

namespace june_11
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Should be 3: " + CalculateHIndex(new int[] { 4, 3, 0, 1, 5 }));
      Console.WriteLine("Should be 2: " + CalculateHIndex(new int[] { 4, 3, 0 }));
      Console.WriteLine("Should be 1: " + CalculateHIndex(new int[] { 4 }));
      Console.WriteLine("Should be 3: " + CalculateHIndex(new int[] { 4, 2, 7, 4, 0, 1 }));
    }

    static int CalculateHIndex(int[] citations)
    {
      if (citations.Length == 0)
      {
        return 0;
      }

      if (citations.Length == 1)
      {
        return citations[0] > 0 ? citations.Length : 0;
      }

      int result = 1;
      for (int i = 0; i < citations.Length; i++)
      {
        if (citations[i] >= i)
        {
          result++;
        }
      }

      return result;
    }
  }
}




