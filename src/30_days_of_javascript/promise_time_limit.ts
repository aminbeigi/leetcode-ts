type Fn = (...params: any[]) => Promise<any>;

const ERROR_MESSAGE = "Time Limit Exceeded";

function timeLimit(fn: Fn, t: number): Fn {
  return (...args) => {
    return new Promise(async (resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(ERROR_MESSAGE);
      }, t);

      try {
        const result = await fn(...args);
        resolve(result);
      } catch(err) {
        reject(err);
      }
      clearTimeout(timeout);
    });
  };
};