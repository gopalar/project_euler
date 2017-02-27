using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using XORDecryptionLib;

namespace XORDecryptionApp
{
    class Program
    {
        private const int keyLength = 3;

        static void Main(string[] args)
        {
            Stopwatch clock = Stopwatch.StartNew();
            string path = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            string filename = path + "\\cypher.txt";

            if (File.Exists(filename))
            {
                try
                {
                    var messageText = File.ReadAllText(filename);
                    int[] message = messageText.Split(',').Select(int.Parse).ToArray();
                    XORDecryption xorDecryption = new XORDecryption();
                    int[] key = xorDecryption.Analysis(message, keyLength);
                    int[] decryptedMessage = xorDecryption.Decrypt(message, key);
                    int result = decryptedMessage.Sum();

                    clock.Stop();
                    Console.WriteLine(" XOR decryption: https://projecteuler.net/problem=59 ");
                    Console.WriteLine(" File: " + filename);
                    Console.WriteLine(" Max Total: " + result);
                    Console.WriteLine(" Time Taken: " + clock.ElapsedMilliseconds + " milliseconds");

                    if (args.Length > 0)
                    {
                        Console.WriteLine("Decrypted Message: ");
                        for (int index = 0; index < decryptedMessage.Length; index++)
                        {
                            Console.Write(Convert.ToChar(decryptedMessage[index]));
                        }
                    }
                }
                catch(Exception ex)
                {
                    Trace.WriteLine("Error occured while decrypting. File: " + filename);
                    Trace.WriteLine("Exception Message: " + ex.Message);
                    Trace.WriteLine("Stack Trace: " + ex.StackTrace);
                    Console.WriteLine("Error occured while decrypting. File: " + filename);
                }
            }
            else
            {
                Console.WriteLine("File not found. " + filename);
            }

            Console.ReadLine();
        }
    }
}
