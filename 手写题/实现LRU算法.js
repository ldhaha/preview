// 当缓存达到容量上限时，淘汰最久未使用的数据。
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 缓存容量
        this.cache = new Map();   // 使用Map保持插入顺序
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1; // 如果key不存在，返回-1
        }

        // 将访问的元素移到最新位置（Map的末尾）
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        // 如果key已存在，先删除
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // 如果容量已满，删除最久未使用的元素（Map的第一个元素）
        else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        // 添加新元素到最新位置
        this.cache.set(key, value);
    }

    // 获取当前缓存内容（用于调试）
    getCache() {
        return Array.from(this.cache.entries());
    }

    // 获取缓存大小
    size() {
        return this.cache.size;
    }
}