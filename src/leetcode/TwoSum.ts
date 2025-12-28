



function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let checkValue = target - nums[i];
        if (map.has(checkValue)) {
            let returnIndex = map.get(checkValue);
            if (returnIndex != undefined) {
                return [returnIndex, i];
            }
        } else {
           map.set(nums[i], i);
        }
    }
    return [];
};
