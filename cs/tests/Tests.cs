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
        public void Adding_an_item_increases_size_by_one()
        {
            var x = new ThePlayers(false);
            var oldSize = x.size();
            x.Add(42, "");
            Assert.AreEqual(oldSize + 1, x.size());
        }

        [TestMethod]
        public void Can_get_an_item_after_adding_an_item() {
            var x = new ThePlayers(false);
            x.Add(42, "Bob");
            Assert.AreEqual("Bob", x.get(42));
        }

        [TestMethod]
        public void Cant_get_an_item_with_the_wrong_key() {
            var x = new ThePlayers(false);
            x.Add(42, "");
            Assert.ThrowsException<ArgumentOutOfRangeException>(() => x.get(69));
        }

        [TestMethod]
        public void Adding_an_item_to_a_readonly_thing_is_ignored() {
            var x = new ThePlayers(true);
            var oldCount = x.count();
            x.Add(42, "");
            Assert.AreEqual(0, x.count());
        }
    }
}
