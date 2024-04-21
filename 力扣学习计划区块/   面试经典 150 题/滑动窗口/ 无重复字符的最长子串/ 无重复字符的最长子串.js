const str = "abcabcbb"
let lengthOfLongestSubstring=(str)=>{
    //给一个字符串，找出不含有，重复字符的最长子串的长度，长度可能有，可能无,不重复，需要指针,存入 map
    let answer = 0
    let left = 0
    let map = new Map()
    for (let right = 0; right < str.length; right++) {
        const c = str[right]
        while (map.has(c)){
            map.delete(str[left++])
            answer=Math.max(answer,right-left+1)
        }
        map.set(str[right],right)
    }
    return answer
}
lengthOfLongestSubstring(str)
