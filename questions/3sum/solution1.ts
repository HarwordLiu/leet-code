/*
3Sum
[Medium]

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]


Example 2:

Input: nums = []
Output: []


Example 3:

Input: nums = [0]
Output: []




Constraints:

 * 0 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
*/

///<reference types="../../typings" />

const threeSum = (nums: number[]): number[][] => {
    if (!nums || nums.length < 3) {
        return [];
    }
    const sortNums = nums.sort((a, b) => a - b);
    const result = [];
    for (let index = 0; index < sortNums.length; index++) {
        const element = sortNums[index];
        if (element > 0) {
            return result;
        }
        if (index > 0 && element == sortNums[index - 1]) {
            continue;
        }
        let leftIdx = index + 1;
        let rightIdx = sortNums.length - 1;
        while (leftIdx < rightIdx) {
            const leftElement = sortNums[leftIdx];
            const rightElement = sortNums[rightIdx];
            const sum = element + leftElement + rightElement;
            if (sum == 0) {
                if (
                    leftElement !== sortNums[leftIdx - 1] ||
                    rightElement !== sortNums[rightIdx + 1]
                ) {
                    result.push([element, leftElement, rightElement]);
                }
                leftIdx++;
                rightIdx--;
            }
            if (sum > 0) {
                rightIdx--;
            }
            if (sum < 0) {
                leftIdx++;
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

export default threeSum;
