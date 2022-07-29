//Assignment 1: Function and Array
//Assignment 2: Object
//Assignment 3: Function, Array, and Object
//Assignment 4: Algorithm Practice
function twoSum(nums, target){
for(var i=0; i<nums.length; i++)
    {
        for(var j = i+1; j<nums.length; j++)
            {
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
            }
    }
}


//Assignment 5: Callback Function

