// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
                // "" -->                 ""

// return masked string
function maskify(cc) {
    const lastFour = cc.substr(cc.length - 4)
    // console.log(lastFour)
    let str = cc.slice(0, -4)
    str = str.split('')
    str = str.map(item => item.replace(item, '#')).join('')
    // num = cc.replace(num, '#')
    str = str + lastFour
    return str
    // console.log(str)
}

// maskify('67993900389490')

module.exports= { maskify }
  