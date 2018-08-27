// Javascript Map() implementation of LRUCache.
// - Map() stores the data in the order it was received
// - Data is fetched from another api source, but we mock it
//   as e.g. "Data : 1"

class LRUCache {

  constructor(size) {
    this.max = size;
    this.store = new Map();
  }

  getKey(key) {
    //  Key Exists in Cache/Store
    if (this.store.has(key)) {
      let item = this.store.get(key);
      this.store.delete(key);
      this.store.set(key, item);
      return item;
    }
    // Key doesn't exist in Cache/Store
    else {
      // Cache full, delete the LRU element.
      if (this.store.size === this.max) {
        // Find the first element in the Map() with next() and delete it.
        // Note: keep an eye the .value, forgotten this a lot.
        this.store.delete(this.store.keys().next().value);
      }
      let data = "Data :" + key;
      this.store.set(key, data);
      return data;
    }
  }
}

let lru_cache = new LRUCache(3);
console.log(lru_cache.getKey("1"));
console.log(lru_cache.getKey("2"));
console.log(lru_cache.getKey("2"));
console.log(lru_cache.getKey("3"));
console.log(lru_cache.getKey("4"));

console.log(lru_cache);
