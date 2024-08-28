function twoSum(nums: number[], target: number): number[] {
    // TC: O(n)
    // SC: O(n)
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]!;
        if (map.has(nums[i])) {
            return [map.get(nums[i])!, i];
        }
        map.set(compliment, i);
    }

    return [];
};
