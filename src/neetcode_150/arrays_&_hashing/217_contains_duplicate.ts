function containsDuplicate(nums: number[]): boolean {
    // TC: O(n)
    // SC: O(n)
    return new Set(nums).size !== nums.length;
}
