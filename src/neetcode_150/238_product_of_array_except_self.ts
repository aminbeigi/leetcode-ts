function productExceptSelf(nums: number[]): number[] {
    // TC: O(n)
    // SC: O(1)
    const result: number[] = [];

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    return result;
}

function productExceptSelf1(nums: number[]): number[] {
    // TC: O(n)
    // SC: O(n)
    const prefix = nums.slice();
    const postfix = nums.slice();
    const result = Array.from(nums, () => 1);

    for (let i = 1; i < nums.length; ++i) {
        prefix[i] *= prefix[i - 1];
    }

    for (let i = nums.length - 2; i > -1; --i) {
        postfix[i] *= postfix[i + 1];
    }

    for (let i = 0; i < nums.length; ++i) {
        if (i === 0) {
            result[i] = 1 * postfix[i + 1];
        } else if (i === nums.length - 1) {
            result[i] = 1 * prefix[i - 1];
        } else {
            result[i] = prefix[i - 1] * postfix[i + 1];
        }
    }

    return result;
};