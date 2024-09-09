type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    return Object.entries(obj).length === 0;
};

function isEmpty1(obj: Obj): boolean {
    const foo = JSON.stringify(obj);
    return foo === "[]" || foo === "{}";
};