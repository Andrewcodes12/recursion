/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.



Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
let reverse = (str) => {

  if (str.length === 0) {
    return '';
  };

  let first = str[0];
  let last = str.slice(1, str.length);
  let reversed = reverse(last);
  return reversed + first;


}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
