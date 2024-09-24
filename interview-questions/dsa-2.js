function retunIndexofTwoSum(nums, target) {
    if (!nums || nums.length === 0) throw new Error("invalid requested input");
    let newObj = {};
    for (let i = 0; i < nums.length; i++) {
        let remainig = target - nums[i];
        if( newObj && newObj.hasOwnProperty(remainig) == true ){
            return [newObj[remainig],i];
        }
        newObj[nums[i]] =  i;
    }
    throw new Error("Not found");
}
//Test function
console.log(retunIndexofTwoSum([2, 7, 11, 15], 9));