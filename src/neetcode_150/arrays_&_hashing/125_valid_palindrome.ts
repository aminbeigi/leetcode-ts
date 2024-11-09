function isAlphanumeric(char: string) {
    const charCode = char.charCodeAt(0);
    return (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    );
}

function isPalindrome(s: string): boolean {
    // TC: O(n)
    // SC: O(1)
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isAlphanumeric(s[left])) {
            left++;
        } else if (!isAlphanumeric(s[right])) {
            right--;
        } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}
