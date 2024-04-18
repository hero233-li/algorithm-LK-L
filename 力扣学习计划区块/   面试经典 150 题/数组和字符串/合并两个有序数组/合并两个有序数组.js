/*合并两个有序数组
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
请你合并nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 */
const nums1  =[1,2,3,0,0,0] ,nums2 =[2,5,6],m=3,n=3
//方法一、数组切分拼接在排序
const merge1 = (nums1,m,nums2,n)=>{
    nums1=nums1.splice(0,m).concat(nums2.splice(0,n)).sort((a,b)=>a-b)
}
//----------------- merge1(nums1,m,nums2,n)


//方法二、双指针摆动排序，将数组1和数组2的元素，一个个比较，小在前，大在后，一个数组遍历完之后，将另一个数组剩下的元素赋值过去。
const merge2 = (nums1,m,nums2,n)=>{
    let newArr=new Array(m+n) ,p1=0,p2=0,current
    while(p1<m||p2<n){
    if (p1===m) {current=nums2[p2++]}
    else if (p2===n) {current=nums1[p1++]}
    else if (nums1[p1]<nums2[p2]) { current=nums1[p1++]}
    else   {current=nums2[p2++]}
    newArr[p1+p2-1]=current
}
    nums1=newArr.slice()
    console.log(nums1)
}
//--------------------- merge2(nums1,m,nums2,n)

//方法三、有二改变一下，方法二因为会获取当前值，要比较，避免进行覆盖，需要创建新数组，可以将题目的原nums1的尾部空间拿来用，逆向比较大，大在后，小在前

const merge3=(nums1,m,nums2,n)=> {
    let p1 = m - 1, p2 = n - 1, total = m + n - 1, current
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            current = nums2[p2--]
        } else if (p2 === -1) {
            current = nums1[p1--]
        } else if (nums1[p1] < nums2[p2]) {
            current = nums2[p2--]
        } else {
            current = nums1[p1--]
        }
        nums1[total--] = current
    }
}
merge3(nums1,m,nums2,n)
