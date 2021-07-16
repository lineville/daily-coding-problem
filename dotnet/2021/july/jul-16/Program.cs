using System;
using System.Collections.Generic;

namespace jul_16
{
    class Program
    {

        // Minimum number of drinks required to satisfy all customers
        static int minDrinks(IDictionary<int, IList<int>> preferences)
        {
            int drinksLearned = 0;
            HashSet<int> currentIntersection = new HashSet<int>();

            // Put the first customers preferences in to start
            IList<int> firstCustomersDrinks = preferences[0];
            foreach (int drink in firstCustomersDrinks)
            {
                currentIntersection.Add(drink);
            }

            // For the rest of the customers, find the intersection of their preferences with the current intersection
            foreach (var drinks in preferences.Values)
            {
                currentIntersection.IntersectWith(drinks);

                if (currentIntersection.Count == 0)
                {
                    // No intersection, so we can't satisfy this customer need to learn more drinks
                    drinksLearned++;
                    foreach (int drink in drinks)
                    {
                        currentIntersection.Add(drink);
                    }
                }
            }

            if (currentIntersection.Count != 0)
            {
                drinksLearned += currentIntersection.Count;
            }

            return drinksLearned;
        }

        static void Main(string[] args)
        {
            Dictionary<int, IList<int>> drinkPreferences = new Dictionary<int, IList<int>>();
            
            drinkPreferences.Add(0, new List<int> { 0, 1, 3, 6 });
            drinkPreferences.Add(1, new List<int> { 1, 4, 7 });
            drinkPreferences.Add(2, new List<int> { 2, 4, 7, 5 });
            drinkPreferences.Add(3, new List<int> { 3, 2, 5 });
            drinkPreferences.Add(4, new List<int> { 5, 8 });
            
            Console.WriteLine("Drink Preferences");

            foreach (var customer in drinkPreferences.Keys)
            {
                Console.WriteLine($"Customer {customer}: {string.Join(", ", drinkPreferences[customer])}");
            }

            Console.WriteLine("Minimum Drinks Required: " + minDrinks(drinkPreferences));
        }
    }
}
