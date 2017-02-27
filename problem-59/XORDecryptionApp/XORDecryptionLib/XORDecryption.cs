using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace XORDecryptionLib
{
    public class XORDecryption
    {
        public int[] Decrypt(int[] message, int[] key)
        {
            if (message.Length < 0)
            {
                throw new ArgumentException("Specify message argument. ");
            }

            if (key.Length < 0)
            {
                throw new ArgumentException("Specify key argument. ");
            }

            IEnumerable<int> repeatedKey = Enumerable.Range(0, message.Length).Select(x => key[x % key.Length]);
            return message.Zip(repeatedKey, (x, y) => (x ^ y)).ToArray();
        }

        public int[] Analysis(int[] message, int keyLength)
        {
            int maxValue = 0;

            if (keyLength <= 0)
            {
                throw new ArgumentException("Specify keyLength argument.");
            }

            // Identify max value in message
            for (int index = 0; index < message.Length; index++)
            {
                if (message[index] > maxValue)
                {
                    maxValue = message[index];
                }
            }

            int[,] valueFrequencyArray = new int[keyLength, maxValue + 1];
            int[] key = new int[keyLength];

            for (int index = 0; index < message.Length; index++)
            {
                // Identify current key bucket
                int keyBucketIndex = index % keyLength;

                // Increment frequency
                valueFrequencyArray[keyBucketIndex, message[index]]++;

                // Check if current value has more frequency
                if (valueFrequencyArray[keyBucketIndex, message[index]] > valueFrequencyArray[keyBucketIndex, key[keyBucketIndex]])
                {
                    key[keyBucketIndex] = message[index];
                }
            }

            int spaceAscii = 32; // Space is common char in English
            for (int index = 0; index < keyLength; index++)
            {
                key[index] = key[index] ^ spaceAscii;
            }

            return key;
        }
    }
}
