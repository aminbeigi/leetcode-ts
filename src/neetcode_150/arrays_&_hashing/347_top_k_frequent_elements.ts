function topKFrequent(nums: number[], k: number): number[] {
    // TC: O(n) 
    // SC: O(n)
    const frequencyMap = new Map<number, number>();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const bucket: number[][] = Array.from({length: nums.length + 1}, () => []);
    
    for (const [num, count] of Array.from(frequencyMap)) {
        bucket[count].push(num)
    } 
 
    const res: number[] = []
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (res.length >= k) {
            break;
        }
        res.push(...bucket[i]);
    }

    return res;
};

function topKFrequent1(nums: number[], k: number): number[] {
    // TC: O(n log n) 
    // SC: O(n)
    const frequencyMap = new Map<number, number>();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
    }

    const arr = Array.from(frequencyMap);

    arr.sort((a, b) => b[1] - a[1]);

    const res: number[] = [];
    for (let i = 0; i < k; ++i) {
        res.push(arr[i][0]);
    }

    return res;
};