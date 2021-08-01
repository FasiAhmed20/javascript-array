// concepts of Array
var animals=["cat","dog","rat","horse","tiger","elephant"];
console.log(animals[0]);
// cat

console.log(animals[7]);
// undefined because array does not contain 7 customElements

console.log(animals.length);
// 6
animals.push("hen");
console.log(animals);
// push add elemnts at the end of Array
animals.pop();
console.log(animals);
// pop removes the last elements in Array
animals.unshift("hen");
console.log(animals);
// unshift add a new Elements at the begining
animals.shift();
console.log(animals);
// shift removes the first Element

animals.splice(4,0,"lion");
console.log(animals);
// splice is used to add a new Element at index 4
animals.splice(4,1);
console.log(animals);
// splice is used to delete one Element at index 4
animals.reverse();
console.log(animals);
// reverse is used to reverse the order of present in the Array 