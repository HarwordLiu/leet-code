/*
Roman to Integer
[Easy]

Roman numerals are represented by seven different symbols:I, V, X, L, C, D and M
.


Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example,2 is written as IIin Roman numeral, just two one's added together. 
12 is written asXII, which is simply X + II. The number 27 is written as XXVII,
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written
as IV. Because the one is before the five we subtract it making four. The same
principle applies to the number nine, which is written as IX. There are six
instances where subtraction is used:

 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.



Example 1:


Input: s = "III"
Output: 3


Example 2:


Input: s = "IV"
Output: 4


Example 3:


Input: s = "IX"
Output: 9


Example 4:


Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.


Example 5:


Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




Constraints:

 * 1 <= s.length <= 15
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * It is guaranteedthat s is a valid roman numeral in the range [1, 3999].
*/

///<reference types="../../typings" />

const romanToInt = (s: string): number => {
    const [all, m, c, x, i] = s.match(/(M*)(C?M?D?C*)(X?C?L?X*)(I?X?V?I*)/);
    const tagMap: Record<string, Record<string, number>> = {
        i: {
            I: 1,
            II: 2,
            III: 3,
            IV: 4,
            V: 5,
            VI: 6,
            VII: 7,
            VIII: 8,
            IX: 9,
            '': 0,
        },
        x: {
            X: 1,
            XX: 2,
            XXX: 3,
            XL: 4,
            L: 5,
            LX: 6,
            LXX: 7,
            LXXX: 8,
            XC: 9,
            '': 0,
        },
        c: {
            C: 1,
            CC: 2,
            CCC: 3,
            CD: 4,
            D: 5,
            DC: 6,
            DCC: 7,
            DCCC: 8,
            CM: 9,
            '': 0,
        },
        m: {
            M: 1,
            MM: 2,
            MMM: 3,
            '': 0,
        },
    };
    return tagMap.m[m] * 1000 + tagMap.c[c] * 100 + tagMap.x[x] * 10 + tagMap.i[i];
};

export default romanToInt;
