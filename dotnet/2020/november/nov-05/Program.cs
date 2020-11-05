using System;
using System.Linq;
using System.Collections.Generic;

namespace nov_05
{
  class Program
  {

    static String SortedByCharCount(String str)
    {
      String result = "";
      var map = new Dictionary<char, int>();
      foreach (char c in str)
      {
        if (map.ContainsKey(c))
        {
          map[c] = map[c] + 1;
        }
        else
        {
          map.Add(c, 1);
        }
      }

      List<char> orderedChars = map.Keys.ToList();
      orderedChars.Sort((entry1, entry2) => map[entry2].CompareTo(map[entry1]));

      foreach (char c in orderedChars)
      {
        int count = map[c];
        for (int i = 0; i < count; i++)
        {
          result += c;
        }
      }
      return result;
    }


    static void Main(string[] args)
    {
      String s = "tweet";
      String result = SortedByCharCount(s);
      Console.WriteLine($"Sorted by char count\n-----------------------\n{s} -- {result}");
    }
  }
}
