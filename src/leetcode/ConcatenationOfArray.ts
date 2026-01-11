function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
};


// function getConcatenation(nums: number[]): number[] {
//     let returnArray: number[] = [];
//     for (let i = 0; i < nums.length; i++) {
//         returnArray[i] = nums[i];
//         returnArray[nums.length + i] = nums[i];
//     }
//     return returnArray;

// };
