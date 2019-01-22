const ThePlayers = require('../src/thePlayers').default

test('adding an item increases count by one', () => {
    let x = new ThePlayers(false)
    x.add(42, "")
    expect(x.count()).toBe(1)
})

test('Adding an item increases size by five', () => {
    let x = new ThePlayers(false)
    x.add(42, "")
    expect(x.size()).toBe(5)
})

function addAndAssertSize(it, key, value, expectedSize) {
    it.add(key, value)
    expect(it.size()).toBe(expectedSize)
}

test('adding an item increases size by blocks of five', () => {
    let x = new ThePlayers(false)
    addAndAssertSize(x, 1, "a", 5)
    addAndAssertSize(x, 2, "b", 5)
    addAndAssertSize(x, 3, "c", 5)
    addAndAssertSize(x, 4, "d", 5)
    addAndAssertSize(x, 5, "e", 5)
    addAndAssertSize(x, 6, "f", 10)
    addAndAssertSize(x, 7, "g", 10)
    addAndAssertSize(x, 8, "h", 10)
    addAndAssertSize(x, 9, "i", 10)
    addAndAssertSize(x, 10, "j", 10)
    addAndAssertSize(x, 11, "k", 15)
})

test('can get an item after adding an item', () => {
    let x = new ThePlayers(false)
    x.add(42, "Bob")
    expect(x.get(42)).toBe("Bob")
})

test('cant get an item with the wrong key', () => {
    let x = new ThePlayers(false)
    x.add(42, "")
    expect(() => x.get(69)).toThrowError(RangeError)

})

test('adding an item to a readonly ThePlayers is ignored', () => {
    let x = new ThePlayers(true)
    let oldCount = x.count()
    x.add(42)
    expect(x.count()).toBe(0)
})

test('removing an item reduces count but not size', () => {
    //arrange
    let x = new ThePlayers(false)
    x.add(42, "a")
    x.add(43, "b")
    x.add(44, "c")
    expect(x.count()).toBe(3)
    expect(x.size()).toBe(5)
    //act
    x.remove(43)
    //assert
    expect(x.count()).toBe(2)
    expect(x.size()).toBe(5)
})
