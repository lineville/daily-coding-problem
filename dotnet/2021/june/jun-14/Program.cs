using System;
using System.Collections.Generic;
using System.Linq;

// Soundex is an algorithm used to categorize phonetically, such that two names that sound 
// alike but are spelled differently have the same representation.

// Soundex maps every name to a string consisting of one letter and three numbers, like M460.

// One version of the algorithm is as follows:

// 1. Remove consecutive consonants with the same sound (for example, change ck -> c).
// 2. Keep the first letter. The remaining steps only apply to the rest of the string.
// 3. Remove all vowels, including y, w, and h.
// 4. Replace all consonants with the following digits:
//          b, f, p, v → 1
//          c, g, j, k, q, s, x, z → 2
//          d, t → 3
//          l → 4
//          m, n → 5
//          r → 6
// 5. If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.

namespace jun_14
{
    class Program
    {

        private static IDictionary<string, char> consonantMapping = new Dictionary<string, char>()
        {
            { "ck", 'c'}
            // TODO add more mappings of 2 letter pairs that are sonically equivalent to a single letter
        };

        private static HashSet<char> LETTERS_TO_EXCLUDE = new HashSet<char>()
        {
            'a', 'e', 'i', 'o', 'u', 'y', 'w', 'h'
        };

        private static IDictionary<char, int> letterMapping = new Dictionary<char, int>()
        {
            { 'b', 1 },
            { 'f', 1 },
            { 'p', 1 },
            { 'v', 1 },
            { 'c', 2 },
            { 'g', 2 },
            { 'j', 2 },
            { 'k', 2 },
            { 'q', 2 },
            { 's', 2 },
            { 'x', 2 },
            { 'z', 2 },
            { 'd', 3 },
            { 't', 3 },
            { 'l', 4 },
            { 'm', 5 },
            { 'n', 5 },
            { 'r', 6 }
        };

        private static string SoundexMapping(string name)
        {
            char firstLetter = name[0];
            
            List<int> numericalCode = new List<int>();

            List<char> condensedWord = name.ToLower().Substring(1).ToList();

            // Stop one iteration early since we are scanning pairs at a time using i + 1
            for (var i = 0; i < condensedWord.Count - 1; i++)
            {
                // Scan two letters at a time checking the mapping of pairs to single letters
                string nextTwo = "" + condensedWord[i] + condensedWord[i + 1];

                // Replace any pairs of 2 alike sounding with the single char
                if (consonantMapping.ContainsKey(nextTwo))
                {
                    // Remove the first of the two letters
                    condensedWord.RemoveAt(i);

                    // Replace the second letter with the new one
                    condensedWord[i] = consonantMapping[nextTwo];
                }
            }

            // Apply rules 3 and 4 to get the 3 digit numerical code
            foreach (char c in condensedWord)
            {
                bool invalidLetter = LETTERS_TO_EXCLUDE.Contains(c);
                bool alreadyUsedNumber = letterMapping.ContainsKey(c) && numericalCode.Contains(letterMapping[c]);
                
                if (invalidLetter || alreadyUsedNumber)
                {
                    continue;
                }

                numericalCode.Add(letterMapping[c]);
            }


            // Pad out with zeroes
            while (numericalCode.Count < 3)
            {
                numericalCode.Add(0);
            }

            return firstLetter + string.Join("", numericalCode.ToArray());
        }

        static void Main(string[] args)
        {
            string name1 = "Jackson";
            string name2 = "Jaxen";
            
            Console.WriteLine($"{name1} --> {SoundexMapping(name1)}");
            Console.WriteLine($"{name2} --> {SoundexMapping(name2)}");
        }
    }
}
