const strArr = ["",""]
const longestCommonPrefix=(strArr)=>{
    let answer = strArr[0]
    if(!strArr) return ""
    for (let item of strArr) {
        for (let i=0;i<item.length;i++){
            if (item[i]!==answer[i]){
                answer=answer.splice(0,i)
                break
            }
        }
    }
    console.log(answer)
}
longestCommonPrefix(strArr)
