/*
3Sum Closest
[Medium]

Given an integer array nums of length n and an integer target, find three
integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.



Example 1:


Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


Example 2:


Input: nums = [0,0,0], target = 1
Output: 0




Constraints:

 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -104 <= target <= 104
*/

///<reference types="../../typings" />

const threeSumClosest = (nums: number[], target: number): number => {
  const sortArr = nums.sort((a, b) => a - b);
  let midIndex;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index === 0 && element > target) {
      return element + nums[index + 1] + nums[index + 2];
    }

    if (index === nums.length - 1 && element < target) {
      return element + nums[index - 1] + nums[index - 2];
    }
    if (element > target) {
      midIndex = index;
      break;
    }
  }

  let result = Number.MAX_SAFE_INTEGER, leftIdx = midIndex - 1, rightIdx = midIndex + 1;
  while (leftIndex > 0) {
    
  }

  return 0
}

export default threeSumClosest
