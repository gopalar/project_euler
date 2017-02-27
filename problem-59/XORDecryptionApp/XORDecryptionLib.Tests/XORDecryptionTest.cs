using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace XORDecryptionLib.Tests
{
    [TestClass]
    public class XORDecryptionTest
    {
        [TestMethod]
        public void Analysis_EmptyMessage_BlankKey()
        {
            // Arrange
            int[] message = new int[1];
            XORDecryption xorDecryption = new XORDecryption();
            
            // Act
            int[] actual = xorDecryption.Analysis(message, 3);

            // Assert
            Assert.AreEqual(actual[0], 32);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void Analysis_InvalidKeyLength_Throws_ArgumentException()
        {
            // Arrange
            int[] message = new int[1];
            XORDecryption xorDecryption = new XORDecryption();

            // Acct
            int[] key = xorDecryption.Analysis(message, 0);
        }
    }
}
