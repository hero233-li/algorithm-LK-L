const str = "A man, a plan, a canal: Panama"
//方法一、将字符串预处理好之后，声明一个新对象，由原字符串转为数组，倒转在join回来，比较新旧两个字符串
const isPalindrome1=str=> {
    let newStr = ""
    let regu = /^[A-Za-z0-9]+$/
    for (const strElement of str) {
        if (regu.test(strElement)) {
            newStr += strElement.toLowerCase()
        }
    }
    const reverse = newStr.split("").reverse().join("")
    console.log(reverse === newStr)
    for (const reverseKey in newStr) {
        console.log(newStr[reverseKey])
    }
}
 isPalindrome1(str)

//方法二、双指针，将字符串预处理后，设置指针，对处理后的字符串首尾比较，直到两个指针靠拢为止，
const isPalindrome2=str=> {
    let newStr = ""
    let regu = /^[A-Za-z0-9]+$/
    for (const strElement of str) {
        if (regu.test(strElement)) {
            newStr += strElement.toLowerCase()
        }
    }
    let p1=0,p2=newStr.length-1
    while (p1!==p2) {
        if (newStr[p1++] !== newStr[p2--]) {
            return false
        }
    }
    return true
}
isPalindrome2(str)
