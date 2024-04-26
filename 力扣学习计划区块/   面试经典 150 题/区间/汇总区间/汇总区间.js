const nums = [0,1,2,4,5,7]
const summaryRanges = (nums) => {
    let current = nums[0]
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1]!==nums[i]+1) {
            newArr.push(`${current}-->${nums[i]}`)
            console.log(newArr)
            current = nums[i]
        }
    }
}
summaryRanges(nums)
