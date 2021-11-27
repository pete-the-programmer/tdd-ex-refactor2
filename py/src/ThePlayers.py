from .Array import Array

class ThePlayers():
  GROWTH = 5

  def __init__(self, makeReadOnly):
    self.__keys = Array(0)
    self.__names = Array(0)
    self.__count = 0
    self.__readOnly: bool = makeReadOnly

  def get(self, key:int):
    index = self.__keys.index_of(key)
    if index < 0:
      raise Exception(f'Key ${key} not found')
    return self.__names.g(index)

  def add(self, key: int, name: str):
    if not self.__readOnly:
      for i in range(self.__count):
        if self.__keys.g(i) == key:
          self.__names.s(i, name)
          return
      newsize = self.__count + 1
      if newsize > self.size():
        new_keys = Array(self.size() + self.GROWTH)
        new_names = Array(self.size() + self.GROWTH)
        Array.copy(self.__keys, new_keys, self.__count)
        Array.copy(self.__names, new_names, self.__count)
        self.__keys = new_keys
        self.__names = new_names
      self.__keys.s(self.__count, key)
      self.__names.s(self.__count, name)
      self.__count = self.__count + 1

  def remove(self, key: int):
    if self.__readOnly: 
      return False
    for i in range(self.__count):
      if self.__keys.g(i) == key:
        self.__keys.s(i, -1)
        self.__names.s(i, '')
        self.__count = self.__count - 1
        return True
    return False

  def count(self):
    return self.__count

  def size(self):
    return self.__keys.length()