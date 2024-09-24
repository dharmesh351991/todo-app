/*
Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice. 
You can return the answer in any order.

For example, given:

const nums = [2, 7, 11, 15];

const target = 9;

The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

Requirements:

Implement the solution in JavaScript.
The solution should have a time complexity better than O(n^2).
Include proper error handling for edge cases.

*/
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