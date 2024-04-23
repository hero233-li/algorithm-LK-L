const nums = [2,2,1,1,1,2,2]
const majorityElement=(nums)=>{
    let map=new Map()
    for (let i of nums) {
        map.set(i,(map.get(i)||0)+1)
        if (map.get(i)>=nums.length/2){
            return i
        }
    }
    console.log(map)
}
majorityElement(nums)
