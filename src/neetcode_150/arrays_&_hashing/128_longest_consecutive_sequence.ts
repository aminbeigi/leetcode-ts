function longestConsecutive(nums: number[]): number {
    // TC: O(n)
    // SC: O(n)
    const set = new Set(nums);
    let maxLCS = 0;
    let currLCS = 0;

    for (const num of nums) {
        const isLeftMost = set.has(num - 1);
        if (isLeftMost) {
            let nextNum = num;
            while (set.has(nextNum)) {
                currLCS++;
                nextNum++;
            }
            maxLCS = Math.max(maxLCS, currLCS);
            currLCS = 0;
        }
    }

    return maxLCS;
};