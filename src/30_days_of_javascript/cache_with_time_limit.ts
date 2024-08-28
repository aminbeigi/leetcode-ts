interface TCacheValue {
    value: number;
    timer: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
    private cache: Map<number, TCacheValue> = new Map();

    set(key: number, value: number, duration: number): boolean {
        const existingEntry = this.cache.get(key);

        if (existingEntry) {
            clearTimeout(existingEntry.timer);
        }

        const valueObj = { value: value, timer: setTimeout(() => this.cache.delete(key), duration) }
        this.cache.set(key, valueObj);
        return !!existingEntry;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            return this.cache.get(key)!.value;
        }
        return -1;
    }

    count(): number {
        return this.cache.size;
    }
}
