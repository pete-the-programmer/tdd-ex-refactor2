from unittest import TestCase
from src import ThePlayers

class TestPlayers(TestCase):
  def test_adding_an_item_increases_count_by_one(self):
    x = ThePlayers(False)
    oldCount = x.count()
    x.add(42, "")
    self.assertEqual(oldCount + 1, x.count())

  def test_adding_an_item_increases_size_by_five(self):
    x = ThePlayers(False)
    oldSize = x.size()
    x.add(42, "")
    self.assertEqual(oldSize + 5, x.size())

  def test_can_get_an_item_after_adding_an_item(self):
    x = ThePlayers(False)
    x.add(42, "Bob")
    self.assertEqual("Bob", x.get(42))

  def test_cant_get_an_item_with_the_wrong_key(self):
    x = ThePlayers(False)
    x.add(42, "Bob")
    with self.assertRaises(Exception):
      x.get(69)

  def test_adding_an_item_to_a_readonly_thing_is_ignored(self):
    x = ThePlayers(True)
    x.add(42, "Bob")
    self.assertEqual(0, x.count())

  def test_size_increases_in_steps_of_five(self):
    x = ThePlayers(False)
    self.__addAndAssertSize(x, 1, "a", 5)
    self.__addAndAssertSize(x, 2, "b", 5)
    self.__addAndAssertSize(x, 3, "c", 5)
    self.__addAndAssertSize(x, 4, "d", 5)
    self.__addAndAssertSize(x, 5, "e", 5)
    self.__addAndAssertSize(x, 6, "f", 10)
    self.__addAndAssertSize(x, 7, "g", 10)
    self.__addAndAssertSize(x, 8, "h", 10)
    self.__addAndAssertSize(x, 9, "i", 10)
    self.__addAndAssertSize(x, 10, "j", 10)
    self.__addAndAssertSize(x, 11, "k", 15)

  def __addAndAssertSize(self, it: ThePlayers, key: int, value: str, expectedSize: int):
    it.add(key, value)
    self.assertEqual(expectedSize, it.size())

  def test_removing_an_item_reduces_count_but_not_size(self):
    # arrange
    x = ThePlayers(False)
    x.add(42, "a")
    x.add(43, "b")
    x.add(44, "c")
    self.assertEqual(3, x.count())
    self.assertEqual(5, x.size())
    # act
    x.remove(43)
    # assert
    self.assertEqual(2, x.count())
    self.assertEqual(5, x.size())