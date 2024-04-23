const str = "   fly me   to   the moon  "
let lengthOfLastWord = (str)=>{
    let num = str.split(" ")
    let l=0
    while (l<num.length){
        if(num[l]===" "||num[l]===""){
            num.splice(l,1)
            continue
        }
        l++
    }
    console.log(
             num[num.length-1].length
    )
}
lengthOfLastWord(str)
