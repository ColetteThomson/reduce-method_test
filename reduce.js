  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:  acc = accumulator (represents value return from reduce method)
// and curr = currentValue (represents the current array  item that the callback function is being run on)
// and in the below example '0' represents the initial value.  Always specify an initial value

const nums = [0, 1, 2, 3, 4];
// short version:     
let sum = nums.reduce((acc, curr) => acc + curr, 0);

// long version to show how the above line works
/* let sum = nums.reduce((acc, curr) => {
  console.log(
    "accumulator:", acc,
    "current value:", curr,
    "total", acc + curr
  );
  return acc + curr;
}); */

// to be used for both long and short versions
console.log(sum);

// Note for above:  Now that you understand how the callback function  works to accumulate values, let’s explore why  
//the function only executed four times even though  there were five elements in the array of numbers.  
//The reason is that the reduce method  actually takes a second parameter -   
//the initial value to use as the accumulator.  If you don’t specify an initial value,  
//the accumulator will default to the first element  in the array. In this case that element was zero,  
//and the accumulation process starts with  the second element in the array, so 1 is added to 0.
//However, if I explicitly specify  an initial value to use as the accumulator  -- so line 24 to read: }, 0); --, then  
//the callback function will execute five times,  beginning with the first element of the array,  
//and using our explicit initial value as the  accumulator. As you can see, in this case that  
//gives us the same result, but if I were to change  the initial value to '10', then the reduce method  
//will start the summing process at 10, giving  us a final value of 20.
// you should always specify the initial value to use for the accumulator in order  to be explicit with 
// your intentions - not doing so can lead to  unexpected behavior and strange bugs in your code



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

//Note:  Reduce can also be used in many other useful ways,  such as grouping objects by a specific property,  
//flattening arrays, or counting how many  times a value appears in an object or array.  

// Totaling a specific object property -using dot notation to get specifically 'yrsExperience'.
// note: important to add the initial value (in this example '0') - because if not then
// the accumulator starts out as the first element  in the array which in this case is an object.  
// Then, JavaScript does what we told it to, it attempts to add curr.yrsExperience to this object.  
// console.log result is then [object object]713 - because is adding an object and integer together


let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too:
// note: first set of curly braces is the boundaries of the  callback function, and the fourth set after the  
// comma is our initial value, an empty object. This  is what the accumulator will be on the first pass. 
//So at this point in the function, the accumulator  is an empty object and curr is the first team  
//member in the array.

//expected result from below:  {Developer: 12, Designer: 4}

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc
},{});

console.log(experienceByProfession);