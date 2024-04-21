const nums = [0,0,1,1,1,2,2,3,3,4]
const removeDuplicates = (nums)=>{
    let left = 0
    for(let i = 1; i <= nums.length; i++){
        if(nums[left] !== nums[i]){
            nums[++left]=nums[i]
        }
    }
    nums.splice(left,nums.length-left)
    console.log(left,nums)
}
removeDuplicates(nums)
