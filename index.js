// function learnClosure(){
//     let message = "Hello, Closure!";

//     return function(){
//         console.log(message);
//     }
// }

// let closureFunction = learnClosure();

// closureFunction();

// Write a function createCounter that returns an object with two methods:

// increment: increases the counter by 1.
// getCount: returns the current counter value.

// function createCounter(){
//     let count = 0;

//     return {
//         increment: function(){
//             count++;
//         },
//         getCount: function(){
//             return count;
//         }
//     }
// }

// let counter = createCounter();

// counter.increment();

// console.log(counter.getCount()); // Outputs: 1

// (function() {
//     console.log("Hello from an IIFE!");
// })();

// const greet=(greeting)=>{
// return (greet)=>{
//     console.log(`${greeting}`,`${greet}`);
// }
// }
// const output=greet("hello");
// output("javascript");

// const obj = {
//   name: {
//     firstName: "Shubham",
//     lastName: "Raut",
//   },
//   age: 25,
//   college: {
//     degree: "Shri Guru Gobind Singhji",
//     school: "Jagruti Vidyalaya",
//   },
// };

// const copyobj=obj;

// const copyOtherOjb=Object.assign({},obj);    // Shllow copy
// const copyOtherOjb = JSON.parse(JSON.stringify(obj)); // Deep Copy

// obj.age = 26;

// obj.name.firstName = "Suresh";
// console.log(obj.name.firstName);
// console.log(copyOtherOjb.name.firstName);

// console.log(obj.name.firstName);
// console.log(obj.age);
// console.log(copyOtherOjb.age);

// const paragraphs=document.getElementsByClassName("testing");

// console.log(paragraphs.length);

// const newDiv=document.createElement("div");
// newDiv.className="testing";

// document.body.appendChild(newDiv);
// console.log("after adding new div to the dom",paragraphs.length);

// const queryParagraphs=document.querySelectorAll(".testing");

// console.log(queryParagraphs.length);
// const newParagraph=document.createElement("div");

// newParagraph.className="testing";

// document.body.appendChild(newParagraph);

// console.log("after adding new paragraph to the dom",queryParagraphs.length);

// const div=document.querySelector(".div");

// const form=document.querySelector(".form");

// const button = document.querySelector(".button");

// div.addEventListener("click",newFunction);
// form.addEventListener("click",newFunction);
// button.addEventListener("click",newFunction);

// function newFunction(event){
//     event.preventDefault();
//     console.log(event);
// alert("currentTarget - ", event.currentTarget.tagName);
// }

// const removeDuplicates=arr.filter((num,index)=>{
//     return arr.indexOf(num)===index;
// })
// console.log(removeDuplicates);

//indexOf returns the first occurence of the element;

// const arr=[1,10,3,4,1,5,6,3];
// let k=2

// arr=[6,3,1,10,3,4,1,5];

// function rotateKArray(arr,k){
//   let n=arr.length;
//   k=k%n;
//   const rotated=arr.slice(-k).concat(arr.slice(0,n-k));
//   return rotated;

// }
// console.log(rotateKArray(arr,2));

// reverse the entire array
//[3,6,5,1,4,3,10,1];

//find number which is missing in sequence array;
// const arr = [1, 2, 4, 5, 6, 7, 8];
// let n = arr.length + 1;  // Expected range size (including the missing number)

// let sum = (n * (n + 1)) / 2;  // Correct formula for the sum of 1 to n

// const arrSum = arr.reduce((acc, num) => acc + num, 0);

// console.log(sum - arrSum);  // Output: 3

// merge sorted array
// function mergeSortedArrays(arr1,arr2){
//     let mergedArray=[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             mergedArray.push(arr1[i]);
//             i++;
//         }else{
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     return mergedArray;
// }
// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// function reverseString(str){
//     let reverse='';
//     for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i];
//     }
//     return reverse;
// }

// console.log(reverseString("hello"));

// Practicing for the TrendLyne Final Round Questions

// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// function mergeSortedArrays(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let mergeArray = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArray.push(arr1[i]);
//       i++;
//     } else {
//       mergeArray.push(arr2[j]);
//       j++;
//     }
//   }
//   return mergeArray;
// }

// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));

// innerText will only return the text which is visible to the user, it will not return the HTML tags.
// textContent will return the text content of the element, including hidden elements and HTML tags.
// innerHTML will return the HTML content of the element, including any HTML tags.

// If you want to change the content:
// element.innerText = 'New text' → changes visible text only.
// element.textContent = 'New text' → changes all text, wipes out any HTML.
// element.innerHTML = '<b>New</b> text' → changes everything, allows adding HTML.

// todo application in javascript

const form = document.getElementById("todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

function todoApplication() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText) {
      addTodo(todoText);
      input.value = "";
    }
  });
}

function addTodo(todoText) {
  const li = document.createElement("li");

  li.textContent = todoText;
  li.classList.add("todo-item");
  list.appendChild(li);
    
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  li.appendChild(deleteButton);
  // optimize this method we will apply on main list directly rather that each buttn element
  list.addEventListener("click",(event)=>{
    if(event.target.classList.contains('delete-button')){
        const itemToDelete = event.target.parentElement;
        itemToDelete.remove();
    }
  })
}
todoApplication();
