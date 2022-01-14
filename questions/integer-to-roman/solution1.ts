/*
Integer to Roman
[Medium]

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

Given an integer, convert it to a roman numeral.



Example 1:


Input: num = 3
Output: "III"


Example 2:


Input: num = 4
Output: "IV"


Example 3:


Input: num = 9
Output: "IX"


Example 4:


Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.


Example 5:


Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




Constraints:

 * 1 <= num <= 3999
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

///<reference types="../../typings" />

const intToRoman = (num: number): string => {
    const tagMap: Record<number, Record<string, string>> = {
        0: {
            i: '',
            x: '',
            c: '',
            m: '',
        },
        1: {
            i: 'I',
            x: 'X',
            c: 'C',
            m: 'M',
        },
        2: {
            i: 'II',
            x: 'XX',
            c: 'CC',
            m: 'MM',
        },
        3: {
            i: 'III',
            x: 'XXX',
            c: 'CCC',
            m: 'MMM',
        },
        4: {
            i: 'IV',
            x: 'XL',
            c: 'CD',
        },
        5: {
            i: 'V',
            x: 'L',
            c: 'D',
        },
        6: {
            i: 'VI',
            x: 'LX',
            c: 'DC',
        },
        7: {
            i: 'VII',
            x: 'LXX',
            c: 'DCC',
        },
        8: {
            i: 'VIII',
            x: 'LXXX',
            c: 'DCCC',
        },
        9: {
            i: 'IX',
            x: 'XC',
            c: 'CM',
        },
    };
    const mIndex = Math.floor(num / 1000);
    const mRemain = num % 1000;
    const cIndex = Math.floor(mRemain / 100);
    const cRemain = mRemain % 100;
    const xIndex = Math.floor(cRemain / 10);
    const xRemain = cRemain % 10;

    return `${tagMap[mIndex].m}${tagMap[cIndex].c}${tagMap[xIndex].x}${tagMap[xRemain].i}`;
};

export default intToRoman;
