class LRUArrayMap {
  constructor(size) {
    this.max = size;
    this.queue = [];
    this.store = {};
  }

  getKey(key) {
    if (this.store[key]) {
      let index_of_key = this.queue.indexOf(key);
      this.queue.splice(index_of_key, 1);
      this.queue.push(key);
      return this.store[key];
    }
    else {
      if (this.queue.length == this.max) {
        let removed = this.queue.shift();
        delete this.store[removed];
      }
      this.queue.push(key);
      this.store[key] = "data " + key;
      return this.store[key];
    }
  }
}

let lru_cache = new LRUArrayMap(3);

console.log(lru_cache.getKey("1"));
console.log(lru_cache.getKey("2"));
console.log(lru_cache.getKey("3"));
console.log(lru_cache.getKey("5"));
console.log(lru_cache.getKey("3"));
console.log(lru_cache.getKey("4"));
console.log(lru_cache.queue);
