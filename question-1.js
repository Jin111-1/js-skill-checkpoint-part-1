// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
myTodo.push({id: 5, todo: "Walk the dog" });
console.log(myTodo);//ตอบ

myTodo[3].todo = "Go to the gym";
console.log(myTodo[3]);//ตอบ

myTodo.pop()
console.log(myTodo);//ตอบ

let message = "To-do id:"+myTodo[3].id +", "+myTodo[3].todo
console.log(message);//ตอบ