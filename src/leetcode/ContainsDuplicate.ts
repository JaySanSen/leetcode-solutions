/**
 * Check if an array has all unique elements or if it contains duplicate elements 
 * Return false if all unique
 * Return true if duplicate elements are there
 */



function containsDuplicate(nums: number[]): boolean {
  return !(new Set<number>(nums).size === nums.length);
};


function containsDuplicateTwo(nums: number[]): boolean {
  let setNums: Set<number> = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (setNums.has(nums[i])) {
      return true;
    }
    else {
      setNums.add(nums[i]);
    }
  }
  return false;

}