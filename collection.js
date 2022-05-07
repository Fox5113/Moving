
class Node
{
    key = null;
    value = null;

    constructor(key, value)
    {
        this.key = key;
        this.value = value;
    }
}


class IndexedMap {
    Map = []

    constructor()
    {
    }

    set(key, value)
    {
        if( this.Map.length == 0)
        {
            let node = new Node(key, value);
            this.Map.push(node);
        }
        else
        {
            if(this.has(key) === false)
            {

            }
        }
        return this;
    }
    has(key) {
        this.Map.forEach(function(item)
        {
            if (item.key == key)
            {
                return true;
            }
          })
        return false;
    }
    hasIndex(index) {
        if (!!this.Map[index])
        {
            return true;
        }
        return false;
    }
    get(key) {
        for (let i = 0; i < this.Map.length; i++) {
            if (this.Map[i].key == key)
            {
                return [this.Map[i] , i];
            }
          }
        return null;
    }
    getByIndex(index) {
        return this.Map[index];
    }
    remove(key)
    {
        let item = this.get(key)
        if(item != null)
        {
            return this.removeAt(item[1], 1);
        }
        return this;
    }
    size()
    {
        return this.Map.length;
    }
    
    forEach(fn)
    {
        for (let i = 0; i < this.Map.length; i++)
        {
            fn(this.Map[i].value, this.Map[i].key, i);
        }
    }
    union(...maps) {
        let concated_map = [];
        concated_map.concat(this.Map);
        maps.Map.forEach(function(item)
        {
            concated_map.concat(item);
        })
        return concated_map;
    }
    unique()
    {
        let uni = []
        for (let i = 0; i < this.Map.length; i++) {
            if (uni.includes(this.Map[i].value) == false)
            {
                uni.push([this.Map[i].value , i]);
            }
          }
        return uni;
    }
    uniqueKeys()
    {
        let uni = []
        for (let i = 0; i < this.Map.length; i++) {
            if (uni.includes(this.Map[i].key) == false)
            {
                uni.push([this.Map[i].key , i]);
            }
          }
        return uni;
    }
    /*
    sort(fn(value1, value2, key1, key2)) {
        return this;
    }
    sortIndexes(fn(index1, index2) {
        return this;
    }*/
    setTo(index, value) {
        if (this.hasIndex(index))
        {
            this.Map[index] = value;
        }
        return this;
    }
    removeAt(index, count = 1)
    {
        let removed = this.Map.splice(index, count);
        return removed;
    }
    }