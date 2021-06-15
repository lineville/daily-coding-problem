using System;
using System.Linq;

namespace jun_13
{
    class Program
    {

        private static string SimulateDominoes(string initialDominoes)
        {
            char[] result = new char[initialDominoes.Count()];
            char[] doms = initialDominoes.ToCharArray();
            bool anyChanges = true;

            while (anyChanges)
            {
                anyChanges = false;
            
                for (int i = 0; i < doms.Length; i++)
                {
                    char d = doms[i];

                    if (d == '.')
                    {
                        if (i != 0 && i != doms.Length - 1 && doms[i - 1] == 'R' && doms[i + 1] == 'L')
                        {
                            result[i] = d;
                        } else if (i != 0 && doms[i - 1] == 'R')
                        {
                            result[i] = 'R';
                            anyChanges = true;
                        } else if (i != doms.Length - 1 && doms[i + 1] == 'L')
                        {
                            result[i] = 'L';
                            anyChanges = true;
                        } else {
                            result[i] = d;
                        }
                    } else {
                        result[i] = d;
                    }
                }
            }

            return result.ToString();
        }

        static void Main(string[] args)
        {
            string input1 = ".L.R....L";
            string input2 = "..R...L.L";

            Console.WriteLine($"{input1} --> {SimulateDominoes(input1)}");
            Console.WriteLine($"{input2} --> {SimulateDominoes(input2)}");
        }
    }
}
