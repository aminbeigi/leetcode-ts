/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    let res = "";
    for (const str of strs) {
        res += str.length + "#" + str;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    const res: string[] = [];

    let strLength = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "#") {
            const str = s.slice(i + 1, i + Number(strLength) + 1);
            res.push(str);
            i += Number(strLength)
            strLength = "";
        } else if (s[i] !== "#") {
            strLength += s[i]
        }
    }

    return res;
};


/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */