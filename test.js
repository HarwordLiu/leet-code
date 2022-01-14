/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) {
        return s
    }
    const sources = s.split('')
    let results = []
    let cycleIndex = 0
    let index = 0
    while (sources.length > index) {
        let x = cycleIndex * numRows
        results[x] = []
        console.log('14', results)
        for (let y = 0; y < numRows - 1; y++) {
            const char = sources[index]
            if (!char) {
                break
            }
            console.log(x, y, char)
            results[x][y] = char
            console.log(results)
            index++
        }
        console.log('15')
        for (let y = numRows - 1; y > 0; y--) {
            if (!results[x]) {
                console.log('y change')
                results[x] = []
            }
            const char = sources[index]
            if (!char) {
                break
            }
            console.log(x, y, char)
            results[x][y] = char
            console.log(results)
            index++
            x++
        }
        cycleIndex++
    }
    let resultStr = ''
    for (let i = 0; i < numRows; i++) {
        results.forEach((e) => {
            if (e[i]) {
                resultStr += e[i]
            }
        })
    }
    return resultStr
}

console.log(
    'result: ',
    convert(
        'acgvowybplftrgdhcdmqqsazmaucxggaimvykvcbjhxapaktfykvqmwemshjynjjbhhoejpnsoqioadvynqrboxnigzhtkqxrznwjclbrblhbpdcevvgmsvuzuduhvryvgwejkhcltlpiqroomucgsyfmcatxtuuasalcipqdcfnvybjmynsqlaepaanvujxokkruzhxeokzmnkalxsdisiauinseypskalebubfingwbqwonruylcyimnaqnpkyrwctsgadvhbyzynprjnclnkxcmppczpvxsqqarvvawuzwjopsdsfseeuttmxubssvjkxchtcdpbaaspuvjboqfkjaygucaozjyxlfspljrnjlefgqiwinjrnhzjjbyjlygygaorjhguskzaahziwiblpcubeumrvsrbufudocximylpfkzdudojhkmnhyecsyfmfbpudmerkpgrbiuvnkhuxvieuoimmnzsoqotfskpktjlbfjqqsknnuthjbwxoxpepfxuyjmkcvxfagvsaghoccxldvltscziiyciiqsklpsoyniyvsoyumlyjwtcztmjrqrzhlmsaeiarrbplpnfdydpxzrwsfflvyncjzxlfhoya',
        250
    )
)
