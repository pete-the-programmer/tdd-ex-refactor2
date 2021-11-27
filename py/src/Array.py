
class Array():
  def __init__(self, length) -> None:
    self.__values = [None]*length

  def s(self, index, value):
    self.__values[index] = value

  def g(self, index):
    return self.__values[index]

  def length(self):
    return len(self.__values)

  def index_of(self, value):
    for i, v in enumerate(self.__values):
      if v == value:
        return i
    return -1


  @staticmethod
  def copy(a1, a2, count ):
    for i in range(count):
      a1.s(i, a2.g(i))