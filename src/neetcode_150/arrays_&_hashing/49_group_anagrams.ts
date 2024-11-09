function groupAnagrams(strs: string[]): string[][] {
    // TC: O(n * k)
    // SC: O(n * k)
    const anagrams = new Map<string, string[]>();

    for (const str of strs) {
        const charArray = Array(26).fill(0);

        for (const char of str) {
            charArray[char.charCodeAt(0) - 97]++;
        }

        const stringCharArray = JSON.stringify(charArray);
        if (anagrams.has(stringCharArray)) {
            anagrams.get(stringCharArray).push(str);
        } else {
            anagrams.set(stringCharArray, [str]);
        }
    }

    return Array.from(anagrams.values());
}
