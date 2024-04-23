const haystack = "leetcode", needle = "leeto"
let strStr=(haystack,needle)=>{
    let n=needle.length
    let answer = -1
    for (let i = 0; i < haystack.length; i++) {
       if (haystack.slice(i,i+n)===needle){
           answer=i
           break
       }
    }
    console.log(answer)
}
strStr(haystack,needle)
