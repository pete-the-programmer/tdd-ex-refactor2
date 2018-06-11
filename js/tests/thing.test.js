const thing = require('../src/thing').default

test('adding an item increases count by one', () => {
    let x = new thing(false)
    let oldCount = x.count()
    x.add(42)
    expect(x.count()).toBe(oldCount + 1)
})

test('adding an item increases size by blocks of ten', () => {
    let x = new thing(false)
    let oldSize = x.size()
    x.add(42)
    expect(x.size()).toBe(oldSize + 10)
    for (let i = 0; i < 9; i++) {
        x.add(i)
        expect(x.size()).toBe(oldSize + 10)
    }
    x.add(69)
    expect(x.size()).toBe(oldSize + 20)
})

test('can get an item after adding an item', () => {
    let x = new thing(false)
    x.add(42)
    expect(x.get(0)).toBe(42)
})

test('cant get an item greater than count', () => {
    let x = new thing(false)
    expect(() => x.get(15)).toThrowError(RangeError)
})

test('adding an item to a readonly thing is ignored', () => {
    let x = new thing(true)
    let oldCount = x.count()
    x.add(42)
    expect(x.count()).toBe(0)
})