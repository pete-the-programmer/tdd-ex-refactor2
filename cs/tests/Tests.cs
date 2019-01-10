using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TddExRefactor2;

namespace TddExRefactor2Tests
{
    [TestClass]
    public class ThingTests
    {
        [TestMethod]
        public void Adding_an_item_increases_count_by_one()
        {
            var x = new ThePlayers(false);
            var oldCount = x.count();
            x.Add(42, "");
            Assert.AreEqual(oldCount + 1, x.count());
        }
        
        [TestMethod]
        public void Adding_an_item_increases_size_by_five()
        {
            var x = new ThePlayers(false);
            var oldSize = x.size();
            x.Add(42, "");
            Assert.AreEqual(oldSize + 5, x.size());
        }

        [TestMethod]
        public void Size_increases_in_steps_of_five()
        {
            var x = new ThePlayers(false);
            addAndAssertSize(x, 1, "a", 5);
            addAndAssertSize(x, 2, "b", 5);
            addAndAssertSize(x, 3, "c", 5);
            addAndAssertSize(x, 4, "d", 5);
            addAndAssertSize(x, 5, "e", 5);
            addAndAssertSize(x, 6, "f", 10);
            addAndAssertSize(x, 7, "g", 10);
            addAndAssertSize(x, 8, "h", 10);
            addAndAssertSize(x, 9, "i", 10);
            addAndAssertSize(x, 10, "j", 10);
            addAndAssertSize(x, 11, "k", 15);
        }

        private void addAndAssertSize(ThePlayers it, int key, string value, int expectedSize)
        {
            it.Add(key, value);
            Assert.AreEqual(expectedSize, it.size());
        }

        [TestMethod]
        public void Can_get_an_item_after_adding_an_item() {
            var x = new ThePlayers(false);
            x.Add(42, "Bob");
            Assert.AreEqual("Bob", x.get(42));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void Cant_get_an_item_with_the_wrong_key() {
            var x = new ThePlayers(false);
            x.Add(42, "");
            x.get(69);
        }

        [TestMethod]
        public void Adding_an_item_to_a_readonly_thing_is_ignored() {
            var x = new ThePlayers(true);
            x.Add(42, "");
            Assert.AreEqual(0, x.count());
        }

        [TestMethod]
        public void Removing_an_item_reduces_count_but_not_size() {
            //arrange
            var x = new ThePlayers(false);
            x.Add(42, "a");
            x.Add(43, "b");
            x.Add(44, "c");
            Assert.AreEqual(3, x.count());
            Assert.AreEqual(5, x.size());
            //act
            x.Remove(43);
            //assert
            Assert.AreEqual(2, x.count());
            Assert.AreEqual(5, x.size());
        }
    }
}
