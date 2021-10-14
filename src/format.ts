// TODO https://github.com/samsonjs/format/blob/master/format.js
// NEXT: https://github.com/codesandbox/codesandbox-client
// const format = (format: string, ...args: string[]) => {
//         // var argIndex = 1, // skip initial format argument
//         //     arg,
//         //     tmp,
//         //     precision,
//         //     nextArg = function () {
//         //         return args[argIndex++]
//         //     },
//         //     slurpNumber = function () {
//         //         var digits = ''
//         //         while (/\d/.test(fmt[i])) {
//         //             digits += fmt[i++]
//         //             c = fmt[i]
//         //         }
//         //         return digits.length > 0 ? parseInt(digits) : null
//         //     }
//         let escaped = false, result = '', leadingZero = false
//         for (let i in format as any) {
//             const symbol = format[i]
//             let arg = args[i]
//             if (escaped) {
//                 escaped = false
//                 if (symbol === '.') {
//                     leadingZero = false
//                     symbol = args[++i]
//                 } else if (c === '0' && args[i + 1] == '.') {
//                     leadingZero = true
//                     i += 2
//                     c = fmt[i]
//                 } else {
//                     leadingZero = true
//                 }
//                 precision = slurpNumber()
//                 switch (arg) {
//                     case 'b': // number in binary
//                         result += parseInt(nextArg(), 10).toString(2)
//                         break
//                     case 'c': // character
//                         arg = nextArg()
//                         if (typeof arg === 'string' || arg instanceof String) result += arg
//                         else result += String.fromCharCode(parseInt(arg, 10))
//                         break
//                     case 'd': // number in decimal
//                         result += parseInt(nextArg(), 10)
//                         break
//                     case 'f': // floating point number
//                         tmp = String(parseFloat(nextArg()).toFixed(precision || 6))
//                         result += leadingZero ? tmp : tmp.replace(/^0/, '')
//                         break
//                     case 'j': // JSON
//                         result += JSON.stringify(nextArg())
//                         break
//                     case 'o': // number in octal
//                         result += '0' + parseInt(nextArg(), 10).toString(8)
//                         break
//                     case 's': // string
//                         result += nextArg()
//                         break
//                     case 'x': // lowercase hexadecimal
//                         result += '0x' + parseInt(nextArg(), 10).toString(16)
//                         break
//                     case 'X': // uppercase hexadecimal
//                         result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase()
//                         break
//                     default:
//                         result += arg
//                         break
//                 }
//             } else if (arg === '%') {
//                 escaped = true
//             } else {
//                 result += arg
//             }
//         }
//         return result
//     }
// })()
