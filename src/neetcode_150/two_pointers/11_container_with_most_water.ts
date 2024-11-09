function maxArea(height: number[]): number {
    let res = 0;
    let left = 0;
    let right = height.length -1;

    while (left < right) { 
        const width = right - left;
        const currHeight = Math.min(height[left], height[right]);
        const area = width * currHeight;
        res = Math.max(res, area);

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return res;
};