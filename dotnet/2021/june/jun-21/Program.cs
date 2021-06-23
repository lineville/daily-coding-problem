using System;
using System.Collections.Generic;

/// <summary>
/// Daily Coding Problem
/// [Hard] -- Dropbox
/// 
/// Create a data structure that performs all the following operations in O(1) time:

// plus: Add a key with value 1. If the key already exists, increment its value by one.
// minus: Decrement the value of a key. If the key's value is currently 1, remove it.
// get_max: Return a key with the highest value.
// get_min: Return a key with the lowest value.
/// </summary>

namespace jun_21
{

    class MinMaxMap
    {
        private IDictionary<string, int> items;
        private int maxValue;
        private string maxKey;
        private int minValue;
        private string minKey;


        public MinMaxMap()
        {
            this.items = new Dictionary<string, int>();
            this.maxValue = 0;
            this.minValue = 0;
            this.maxKey = "";
            this.minKey = "";
        }

        public void Plus(string key)
        {
            if (this.items.ContainsKey(key))
            {
                this.items[key] += 1;
                
                if (this.items[key] > this.maxValue)
                {
                    this.maxValue = this.items[key];
                    this.maxKey = key;
                }

            } else {
                this.items[key] = 1;
                this.minKey = key;
                this.minValue = 1;
            }
        }

        public void Minus(string key)
        {
            if (!this.items.ContainsKey(key))
            {
                throw new Exception("Cannot subtract from a non-existent key");
            }

            if (this.items[key] > 1)
            {
                this.items[key] -= 1;
                
                if (this.items[key] < this.minValue)
                {
                    this.minValue = this.items[key];
                    this.minKey = key;
                }
            } else {
                this.items.Remove(key);
                // TODO handle resetting min after removal
            }
        }


        public string GetMin()
        {
            return this.minKey;
        }


        public string GetMax()
        {
            return this.maxKey;
        }


    }


    class Program
    {
        static void Main(string[] args)
        {
            MinMaxMap map = new MinMaxMap();
            map.Plus("Millie");
            map.Plus("Millie");
            map.Plus("Millie");
            
            map.Plus("Ella");
            map.Plus("Ella");
            map.Plus("Ella");
            map.Plus("Ella");
            map.Minus("Ella");
            map.Minus("Ella");
            
            map.Plus("Friend");
            map.Plus("Friend");
            string maxKey = map.GetMax();
            Console.WriteLine($"{maxKey}");
        }
    }
}
