const target = 7, nums = [2,3,1,2,4,3]
let minSubArrayLen=(target,nums)=>{
    //该题目，需要返回一个最小长度，且，如果不满足条件，则返回 0,但是最长就是数组长度，因此设置为 length+1，
    let answer = nums.length+1
    //题目需要从nums[0]开始，找到一个元素和大于 target，需要 sum，且需要返回满足条件的最小长度，需要 left 开始移动，
    let left=0,sum=0
    for(let right=0;right<nums.length;right++){
        sum+=nums[right]
        //当 sum>target，需要进入判断，但是可能会出现，n1+n2+n3>target,n2+n3，也大于，就是在一个循环中需要两次判断，选择循环
        while (sum>target){
            //当满足条件的时候，获取当前的长度，保存下来，和之前的长度比较，因为会把所有的情况都循环完毕，会找到最短的长度，
            answer=Math.min(answer,right-left+1)
            sum-=nums[left]
        }
    }
    return answer>n?0:answer
}
