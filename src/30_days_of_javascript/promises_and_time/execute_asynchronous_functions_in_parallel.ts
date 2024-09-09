type Fn<T> = () => Promise<T>

async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    if(functions.length === 0) {
      resolve([]);
      return;
    }

    const res: T[] = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (func, idx) => {
      try {
        const subResult = await func();
        res[idx] = subResult;
        resolvedCount++;
        if(resolvedCount === functions.length) {
          resolve(res);
        }
      } catch(err) {
        reject(err);
      }
    });
  });
};

async function promiseAll2<T>(functions: Fn<T>[]): Promise<T[]> {
    return await Promise.all(functions.map((func) => func()));
};