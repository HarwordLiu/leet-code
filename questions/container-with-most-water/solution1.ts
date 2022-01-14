/*
Container With Most Water
[Medium]

Given n non-negative integers a1, a2, ..., an , where each represents a point at
coordinate (i, ai). n vertical lines are drawn such that the two endpoints of
the line i is at (i, ai) and (i, 0). Find two lines, which, together with the
x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.



Example 1:

[https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg]
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example 2:


Input: height = [1,1]
Output: 1


Example 3:


Input: height = [4,3,2,1,4]
Output: 16


Example 4:


Input: height = [1,2,1]
Output: 2




Constraints:

 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
*/

///<reference types="../../typings" />

// 动态规划，通过调整容器两边的指针求解最大值。

const maxArea = (height: number[]): number => {
    let i = 0,
        j = height.length - 1,
        max = 0;
    while (i < j) {
        if (height[i] > height[j]) {
            max = Math.max(max, height[j] * (j - i));
            j -= 1;
        } else {
            max = Math.max(max, height[i] * (j - i));
            i += 1;
        }
    }
    return max;
};

export default maxArea;
