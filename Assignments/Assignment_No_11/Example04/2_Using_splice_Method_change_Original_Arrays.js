// 2. Using Splice method change original array and return following array

vegetables = ["Potato","Onion","Peppers","Cucumber","Pumpkin","Tomato","Corn","Green Peas", "String Beans"];
// Output ==> vegetables = ["Potato", "Brinjal", "Onion", "Peppers", "Cucumber", "Pumpkin", "Tomato", "Corn", "Green Peas", "String Beans"];
console.log(`\n A Insert at index 1 ==> `);

vegetables.splice(1,0,"Brinjal");

console.log(vegetables);

console.log(`\n A Insert at index 5 ==> `);

//Output ==> // vegetables = ["Potato", "Brinjal", "Onion", "Peppers", "Cucumber", "Pumpkin", "Tomato", "Corn", "Green Peas", "String Beans"];

vegetables.replace("Cucumber","Carrot");
console.log(vegetables);