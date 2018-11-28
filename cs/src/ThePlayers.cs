
using System;

namespace TddExRefactor2
{
    public class ThePlayers {
        private int[] _keys;
        private string[] _names;
        private int _count;
        private bool _readOnly;

        public ThePlayers(bool makeReadOnly) {
            this._keys = new int[0];
            this._names = new string[0];
            this._count = 0;
            this._readOnly = makeReadOnly;
        }

        public  void Add(int key, string name) 
        {
            if (!_readOnly) 
            {
                for (int i = 0; i < _count; i++)
                    if (_keys[i].Equals(key)) 
                    {
                    _names[i] = name;
                    return;
                    }
                int newSize = _count + 1;
                if (newSize > _keys.Length) 
                {
                    int[] newKeys = new int[_keys.Length + 1];
                    string[] newNames = new string[_keys.Length + 1];
                    Array.Copy(_keys, newKeys, _count);
                    Array.Copy(_names, newNames, _count);
                    _keys = newKeys;
                    _names = newNames;
                }
                _keys[_count] = key;
                _names[_count] = name;
                _count++;
            }
        }

        public  bool Remove(int key) 
        {
            if (_readOnly)
                return false;
            for (int i = 0; i < _count; i++)
                if (_keys[i].Equals(key)) 
                {
                    _keys[i] = -1;
                    _names[i] = "";
                    _count--;
                    return true;
                }
            return false;
        }

        public string get(int key) {
            var index = Array.IndexOf(_keys, key);
            if(index < 0) {
                throw new ArgumentOutOfRangeException($"Key {key} not found.");
            }
            return this._names[index];
        }

        public int count() {
            return this._count;
        }

        public int size() {
            return this._keys.Length;
        }
    }
}
