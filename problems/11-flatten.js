/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:
plan it out ----
combine iteration and recursion
create new arr called res
iterate over array
if ele is array push spreaded flattened ele into res
otherwise, push on ele
return result arr
***********************************************************************/
let flatten = (arr) => {
  let res = [];

  // if(arr.length === 0){
  //   return res
  // }

  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      res.push(...flatten(ele))

    } else {
      res.push(ele)
    }
  })
  return res
}



console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
