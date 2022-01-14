/*
Longest Common Prefix
[Easy]

Write a function to find the longest common prefix string amongst an array of
strings.

If there is no common prefix, return an empty string "".



Example 1:


Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:


Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.




Constraints:

 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
*/

///<reference types="../../typings" />

const longestCommonPrefix = (strs: string[]): string => {
    let commonPrefix = '',
        index = 0;
    while (strs[0].length > index) {
        let tempChar = '';
        let breakTag = strs.every((e) => {
            const char = e[index];
            if (!char) {
                return false;
            }
            if (tempChar === '') {
                tempChar = char;
                return true;
            }
            return tempChar === char;
        });
        if (!breakTag) {
            break;
        } else {
            index += 1;
            commonPrefix += tempChar;
        }
    }
    return commonPrefix;
};

export default longestCommonPrefix;
