/*
Reverse Integer
[Easy]

Given a signed 32-bit integer x, return x with its digits reversed. If reversing 
x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1]
, then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or
unsigned).



Example 1:

Input: x = 123
Output: 321


Example 2:

Input: x = -123
Output: -321


Example 3:

Input: x = 120
Output: 21


Example 4:

Input: x = 0
Output: 0




Constraints:

 * -231 <= x <= 231 - 1
*/

///<reference types="../../typings" />

const reverse = (x: number): number => {
    const tempStr = x.toString();
    let flag = false;
    let result = '';
    for (let index = tempStr.length - 1; index >= 0; index--) {
        const c = tempStr[index];
        if (c === '-') {
            flag = true;
        } else {
            result += c;
        }
    }
    const resultNumber = flag ? Number('-' + result) : Number(result);
    const limit = Math.pow(2, 31);
    if (resultNumber < -limit && resultNumber > limit) {
        return 0;
    }
    return resultNumber;
};

export default reverse;
