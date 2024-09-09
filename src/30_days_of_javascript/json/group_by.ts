declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}
Array.prototype.groupBy = function <T>(fn: (item: T) => string) {
    const res: Record<string, T[]> = {};
    for (const item of this) {
        const key = fn(item);
        if (!(key in res)) {
            res[key] = [];
        }
        res[key].push(item);
    }
    return res;
};
