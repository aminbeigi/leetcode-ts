function isAnagram(s: string, t: string): boolean {
    // TC: O(n)
    // SC: O(26) -> O(1)
    const charCount = new Array(26).fill(0);
    for (const char of s) {
        const index = char.charCodeAt(0) - 97;
        charCount[index]++;
    }

    for (const char of t) {
        const index = char.charCodeAt(0) - 97;
        charCount[index]--;
    }

    return charCount.every((count) => count === 0);
}
