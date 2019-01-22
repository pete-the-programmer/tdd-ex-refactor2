// /// A THING that implements a kind of list where you can add elements and it
// ///  automatically grows its internal array.

// class thing {
//     constructor(makeReadOnly) {
//         this._data = []
//         this._count = 0
//         this._readonly = makeReadOnly //this is boolean
//     }

//     add(element) {
//         if(!this._readonly) {
//             let newCount = this.count() + 1
//             if(newCount > this.size()) {
//                 //The array needs to grow - grow it!
//                 let newArray = new Array(this.size() + 10)
//                 for (let i = 0; i < this.size(); i++) {
//                     newArray[i] = this._data[i]              
//                 }
//                 this._data = newArray
//             }
//             this._data[this._count++] = element
//         }
//     }

//     get(index) {
//         if(index >= this.count()) {
//             throw new RangeError(`Index ${index} exceeds count ${this._count}.`)
//         }
//         return this._data[index]
//     }

//     count() {
//         return this._count
//     }

//     size() {
//         return this._data.length
//     }
// }

const GROWTH = 5;

class ThePlayers {

    constructor(makeReadOnly) {
        this._keys = [];
        this._names = [];
        this._count = 0;
        this._readOnly = makeReadOnly;
    }

    add(key, name) {
        if (!this._readOnly) 
        {
            for (var i = 0; i < this._count; i++) {
                if (this._keys[i] === key) 
                {
                    this._names[i] = name
                    return
                }
            }
            const newSize = this._count + 1
            if (newSize > this.size()) 
            {
                let newKeys = new Array(this.size() + GROWTH)
                for (let i = 0; i < this.size(); i++) {
                    newKeys[i] = this._keys[i]              
                }                
                let newNames = new Array(this.size() + GROWTH)
                for (let i = 0; i < this.size(); i++) {
                    newNames[i] = this._names[i]              
                }                 

                this._keys = newKeys
                this._names = newNames
            }
            this._keys[this._count] = key
            this._names[this._count] = name
            this._count++
        }
    }

    remove(key) 
    {
        if (this._readOnly)
            return false;
        for (var i = 0; i < this._count; i++) {
            if (this._keys[i] === key) {
                this._keys[i] = -1;
                this._names[i] = "";
                this._count--;
                return true;
            }
        }
        return false;
    }

    get(key) {
        var index = this._keys.indexOf(key);
        if(index < 0) {
            throw new RangeError(`Key ${key} not found.`)
        }
        return this._names[index];
    }

    count() {
        return this._count;
    }

    size() {
        return this._keys.length;
    }
}

module.exports.default = ThePlayers
