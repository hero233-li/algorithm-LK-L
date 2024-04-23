    const nums = [0,0,1,1,1,1,2,3,3]
const removeDuplicates=(nums)=>{
    let left =0,right=2
    while (right<nums.length){
        if (nums[left]===nums[right]&&right>=2){
            nums.splice(right,1)
            continue
        }
        left++, right++
    }
    console.log(left,nums)
    return nums.length
}
removeDuplicates(nums)
