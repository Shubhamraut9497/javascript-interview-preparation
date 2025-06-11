// Newton School Online Node.js compiler to run JavaScript online.
// Write JavaScript code in this online editor and run it.

// console.log("Hello from Newton School! 👋");

// ✅ Count all characters

// 🚫 Ignore spaces

// 🔡 Convert everything to lowercase

// ✂️ Optionally ignore punctuation (bonus)


// const str="Hello, World";

// const freq=str.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((acc,char)=>{
//     acc[char]=(acc[char] || 0)+1;
//     return acc;
// },{})
// console.log(freq);


// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const search="an";

// const result=fruits.filter((fruit)=>fruit.toLowerCase().includes(search.toLowerCase()));
// console.log(result);


// const products = [
//   "Apple iPhone",
//   "Samsung Galaxy",
//   "OnePlus Nord",
//   "Google Pixel",
//   "Nothing Phone",
//   "Motorola Edge"
// ];

// const searchTerm = "phone";

// Write a function searchProducts that returns products containing the searchTerm (case-insensitive).

// function searchProducts(products,searchTerm){
//     const search=products.filter((product)=>{
//         return product.toLowerCase().includes(searchTerm);
//     })
//     return search; 
// }
// const results=searchProducts(products,searchTerm);
// console.log(results);


// find returns the first element that matches the criteria also find method returns undefined when there is no match


// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" }
// ];
// const mail="alice@example.com";
// You are given an array of users. Write a function to find the user by email (case-insensitive).
// array.some returns either true or false value like boolean and in parameter it takes arrow function. 

// function findUserUsingMail(users,mail){
//     const findUser=users.find((user)=>user.email==mail);
//     return findUser;
// }
// const result=findUserUsingMail(users,mail);
// console.log(result);




// Check if any product has quantity 0.

// const products = [
//   { name: "Laptop", quantity: 3 },
//   { name: "Keyboard", quantity: 0 },
//   { name: "Mouse", quantity: 5 }
// ]

// //output true;

// function checkAnyProductQuantityZero(products){
//     const zeroQuantity=products.some((product)=>product.quantity==0);
//     return zeroQuantity;
// }
// const checkQuantity=checkAnyProductQuantityZero(products);

// console.log(checkQuantity);


// Write a function that checks if all students passed (score ≥ 40).

// const scores = [45, 76, 60, 38, 90];

// function checkMarks(scores){
//     const checkScore=scores.every((score)=>{
//         return score>=40;
//     })
//     return checkScore;
// }
// const check=checkMarks(scores);
// console.log(check);



// ✅ Task: Use .find() to return the first student who failed (score < 40).

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 38 },
//   { name: "Charlie", score: 72 },
//   { name: "David", score: 22 }
// ];

// const failedStudent=students.find((student)=>student.score<40);
// console.log(failedStudent);

//  Task: Use .find() to check if the user "adminuser" exists (case-insensitive match).

// const users = [
//   { username: "johnDoe" },
//   { username: "janeSmith" },
//   { username: "ADMINuser" }
// ];

// const admin=users.find((adminUser)=>adminUser.username.toLowerCase()=="adminuser");
// console.log(admin);


//  Use .map() to return an array of product names:

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 25 }
// ];
// const productNames=products.map((product,index)=>{
//     return product.name;
// })
// const usingObjectProperty=products.map((product)=>{
//     return Object.keys(product);
// })
// console.log(usingObjectProperty)



// Use .filter() to return products with price > 100:

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 120 }
// ];

// const productFilterUsingPrice=products.filter((product)=>{
//     return product.price>100;
// })
// console.log(productFilterUsingPrice);


// const students = [
//   { name: "Alice", marks: 88 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 76 },
//   { name: "David", marks: 32 }
// ];
// // Write code to get the names of students who scored more than 50 marks.

// const studentScoredMoreThanFifty=students.filter((student)=>{
//     if( student.marks>50){
//         return student.name;
//     }
// })
// console.log(studentScoredMoreThanFifty);


// Get an array of names of employees who work in the "Engineering" department.

// const employees = [
//   { name: "Emma", department: "HR", salary: 60000 },
//   { name: "Liam", department: "Engineering", salary: 90000 },
//   { name: "Olivia", department: "Engineering", salary: 85000 },
//   { name: "Noah", department: "Marketing", salary: 50000 }
// ];

// const engineerEmployees=employees.filter((employee)=>{
//     return employee["department"]=="Engineering"
// }).map((emp)=>{
//     return emp.name;
// })

// console.log(engineerEmployees);



// Get an array of fruits that start with the letter 'a'.

// const fruits = ["apple", "banana", "cherry", "avocado", "blueberry"];

// const fruitsNameStartsWithA=fruits.filter((fruit)=>{
//     return fruit.startsWith("a");
// })
// console.log(fruitsNameStartsWithA);


// Try writing a .reduce() function to find the maximum number in this array

// const values = [3, 7, 2, 9, 5];

// const maxNumber = values.reduce((acc, element) => {
//   return acc < element ? element : acc;
// }, values[0]);


// Grouping Employees By Department;

// const employees = [
//   { name: "Emma", department: "HR" },
//   { name: "Liam", department: "Engineering" },
//   { name: "Olivia", department: "Engineering" },
//   { name: "Noah", department: "Marketing" },
//   { name: "Ava", department: "HR" }
// ];

// const divideEmp=employees.reduce((acc,emp)=>{
//    const dept= emp.department;
//    if(!acc[dept]){
//     acc[dept]=[];
//    }
//    acc[dept].push(emp.name);

//     return acc;
// },{})

// console.log(divideEmp);


// Grouping By First letter;
// const names = ["Alice", "Bob", "Amanda", "Brian", "Charlie", "Catherine"];

// const groupingByFirstCharacter=names.reduce((acc,name)=>{
//      if(!acc[name.charAt(0)]){
//         acc[name.charAt(0)]= [];
//      }
//       acc[name.charAt(0)].push(name);
//      return acc;
// },{})
// console.log(groupingByFirstCharacter);

// Grouping Students by Subject with Marks
// const data = [
//   { name: "Alice", subject: "Math", marks: 90 },
//   { name: "Bob", subject: "English", marks: 70 },
//   { name: "Alice", subject: "English", marks: 85 },
//   { name: "Bob", subject: "Math", marks: 75 }
// ];

// const studentGrp=data.reduce((acc,student)=>{
//     const {name,subject,marks}=student;
//      if(!acc[name]){
//          acc[name]={};
//      }
//      acc[name][subject]=marks;  
//      return acc;
// },{})
// console.log(studentGrp);


 //Try to group books by genre, and store an array of just their titles under each genre.
// const books = [
//   { title: "Book A", genre: "Fantasy", rating: 4.5 },
//   { title: "Book B", genre: "Fantasy", rating: 4.0 },
//   { title: "Book C", genre: "Sci-Fi", rating: 3.5 },
//   { title: "Book D", genre: "Romance", rating: 5.0 },
//   { title: "Book E", genre: "Sci-Fi", rating: 4.2 }
// ];

// const bookGenre=books.reduce((acc,genres)=>{
//     const {title,genre}=genres;
//     if(!acc[genre]){
//         acc[genre]=[];
//     }
//     acc[genre].push(title);
//     return acc;
// },{})
// console.log(bookGenre);

//Group books by genre and calculate the average rating for each genre


// const ratingAvg=books.reduce((acc,genres)=>{
//     const {genre,rating}=genres;
//     if(!acc[genre]){
//         acc[genre]={};
//     }


// })


// const genreRatings=books.reduce((acc,book)=>{
//     const {genre,rating}=book;
//     if(!acc[genre]){
//         acc[genre]={total:0,count:0};
//     }
//     acc[genre].total+=rating;
//     acc[genre].count+=1;
//     return acc;
// },{})
// console.log(genreRatings);
// const averageRatings={};
// for(let genre in genreRatings){
//     const {total, count} = genreRatings[genre];
//     averageRatings[genre] = parseFloat((total)/count).toFixed(2);
// }
// console.log(averageRatings);




// Group employees by department and role


const employees = [
  { name: "Alice", department: "Engineering", role: "Developer" },
  { name: "Bob", department: "Engineering", role: "Developer" },
  { name: "Charlie", department: "Engineering", role: "Tester" },
  { name: "David", department: "HR", role: "Recruiter" },
  { name: "Eve", department: "HR", role: "Manager" },
  { name: "Frank", department: "HR", role: "Recruiter" }
];


const groupEmp=employees.reduce((acc,employee)=>{
    const {name,department,role}=employee;
    if(!acc[department]){
        acc[department]={};
    }
   if(!acc[department][role]){
    acc[department][role]=[];
   }
   acc[department][role].push(name);
    return acc;
},{})

console.log(groupEmp);

// const nested = [1, 2, [3, 4], [5, [6, 7]]];
// console.log(nested.flat(2));

// From a nested array of employee skills, get a unique list of all skills
// const employees = [
//   { name: "Alice", skills: ["JS", "React"] },
//   { name: "Bob", skills: ["Node", "React"] },
// ];

// const uniqueSkills=[...new Set(employees.flatMap((employee)=>employee.skills))]
// console.log(uniqueSkills);

// const obj={ a: "", b: null, c: 1 };
// let newObj={};
// console.log(Object.entries(obj))
// for(const [key,value] of Object.entries(obj)){
//     if(value!==null && value!==undefined && value!==""){
//         newObj[key]=value;
//     }
// }
// console.log(newObj);



// let numbers = [10, 20, 30, 40, 50].splice(1,2);
// numbers.splice(2,0,25);
// console.log(numbers);

// let animals = ["dog", "cat", "lion"];
// // Replace "cat" with "tiger"

// animals.splice(1,1,"tiger");
// console.log(animals);

// let arr = [1, 2, 3, 4, 5];
// // Remove 2 and 3, insert 10 and 11 in their place
// arr.splice(1,2,10,11);
// console.log(arr);


// const data = {
//   date: new Date(),
//   greet: () => "hi",
//   value: undefined
// };

// const jsonCopy = JSON.parse(JSON.stringify(data));
// console.log(jsonCopy);

// const user = {
//   id: 1,
//   name: "Alex",
//   hobbies: ["reading", "gaming"],
//   profile: {
//     dob: new Date("2000-01-01"),
//     skills: {
//       js: true,
//       python: false
//     }
//   }
// };

// const val=structuredClone(user);
// console.log(val.profile.skills.js);



// const fetchData = new Promise((resolve, reject) => {
//   const data = true;

//   if (data) {
//     resolve("✅ Data fetched successfully!");
//   } else {
//     reject("❌ Failed to fetch data.");
//   }
// });

// fetchData
//   .then((result) => {
//     console.log(result); // ✅ Data fetched successfully!
//   })
//   .catch((error) => {
//     console.error(error);
//   });