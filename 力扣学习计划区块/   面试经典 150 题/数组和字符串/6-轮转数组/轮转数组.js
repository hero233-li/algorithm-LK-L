const nums=[1,2,3,4,5,6,7],k=3
const rotate1=(nums,k)=>{
    let currentArr = new Array()
    for (let i = 0; i < k; i++) {
        let unArr = nums.splice(nums.length-1,1)[0]
        nums.unshift(unArr)
    }
    return nums
}
//rotate1(nums,k)
//耗时过长
const rotate2=(nums,k)=>{
    let currentArr = [...nums]
    for (let i = 0; i < nums.length; i++) {
       if (i+k<nums.length){
           nums[i+k]=currentArr[i]
       }else{
           nums[(i+k)%nums.length]=currentArr[i]
       }
    }
}
rotate2(nums,k)
