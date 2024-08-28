async function addTwoPromises(
    promise1: Promise<number>,
    promise2: Promise<number>
): Promise<number> {
    const num1 = await promise1;
    const num2 = await promise2;
    return new Promise((resolve) => resolve(num1 + num2));
}

async function addTwoPromises2(
    promise1: Promise<number>,
    promise2: Promise<number>
): Promise<number> {
    const [num1, num2] = await Promise.all([promise1, promise2]);
    return new Promise((resolve) => resolve(num1 + num2));
}
