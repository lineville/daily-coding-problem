using System;
using System.Collections.Generic;
using System.Linq;

namespace jun_23
{

    class PrefixMapSum
    {

        private IDictionary<string, int> map;
        public PrefixMapSum()
        {
            map = new Dictionary<string, int>();
        }


        public void Insert(string key, int value)
        {
            map[key] = value;
        }

        public int Sum(string prefix)
        {
            return map.Keys
                      .Where(k => k.StartsWith(prefix))
                      .Select(k => map[k])
                      .Sum();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            PrefixMapSum map = new PrefixMapSum();
            map.Insert("columnar", 3);
            Console.WriteLine($"Sum(col) => {map.Sum("col")}");

            map.Insert("column", 2);
            Console.WriteLine($"Sum(col) => {map.Sum("col")}");

        }
    }
}
