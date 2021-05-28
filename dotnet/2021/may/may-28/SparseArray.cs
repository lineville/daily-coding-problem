using System.Collections.Generic;

namespace may_28
{
    class SparseArray
    {
        private HashSet<int> indexesOfOnes;
        public SparseArray(int[] largeArray, int size)
        {
            indexesOfOnes = new HashSet<int>();
            for (int i = 0; i < size; i++)
            {
                if (largeArray[i] == 1) {
                    indexesOfOnes.Add(i);
                }
            }
        }


        public int Get(int index)
        {
            return indexesOfOnes.Contains(index) ? 1 : 0;
        }


        public void Set(int index, int value)
        {
            if (value == 1)
            {
                indexesOfOnes.Add(index);
            } else
            {
                if (indexesOfOnes.Contains(index)) 
                {
                    indexesOfOnes.Remove(index);
                }
            }
        }
    }
}
