const nums = [3,2,2,3], val = 3
let removeElement = (nums,val)=>{
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1);
        }
    }
    console.log(nums,nums.length)
}
removeElement(nums,val)
