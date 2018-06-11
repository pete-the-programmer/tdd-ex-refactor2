/// A THING that implements a kind of list where you can add elements and it
///  automatically grows its internal array.

class thing {
    constructor(makeReadOnly) {
        this._data = []
        this._count = 0
        this._readonly = makeReadOnly //this is boolean
    }

    add(element) {
        if(!this._readonly) {
            let newCount = this.count() + 1
            if(newCount > this.size()) {
                //The array needs to grow - grow it!
                let newArray = new Array(this.size() + 10)
                for (let i = 0; i < this.size(); i++) {
                    newArray[i] = this._data[i]              
                }
                this._data = newArray
            }
            this._data[this._count++] = element
        }
    }

    get(index) {
        if(index >= this.count()) {
            throw new RangeError(`Index ${index} exceeds count ${this._count}.`)
        }
        return this._data[index]
    }

    count() {
        return this._count
    }

    size() {
        return this._data.length
    }
}

module.exports.default = thing
