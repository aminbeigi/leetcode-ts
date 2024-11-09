function twoSum(nums: number[], target: number): number[] {
    // TC: O(n)
    // SC: O(n)
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const compliment = target - num;
        if (map.has(num)) {
            return [map.get(num)!, i];
        }
        map.set(compliment, i);
    }

    return [];
}
