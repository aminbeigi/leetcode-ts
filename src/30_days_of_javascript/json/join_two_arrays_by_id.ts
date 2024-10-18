type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const combinedArray = [...arr1, ...arr2];
    const map = new Map<number, ArrayType>();

    for (const obj of combinedArray) {
        if (map.has(obj.id)) {
            map.set(obj.id, {...map.get(obj.id), ...obj});
        } else {
            map.set(obj.id, obj);
        }
    }

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};