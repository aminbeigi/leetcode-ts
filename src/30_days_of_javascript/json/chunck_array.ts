type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const res: Obj[][] = [];
    for (let start = 0; start < arr.length; start += size) {
        const end = start + size; 
        const chunk = arr.slice(start, end);
        res.push(chunk);
    }
    return res;
};