// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity=200;
console.log(inventory[0]);

inventory.push({name:"Orange",price:20,quantity:300})
console.log(inventory)

let quantityPrice=0;
for (let i = 0; i < inventory.length; i++) {
  quantityPrice=quantityPrice+inventory[i].price*inventory[i].quantity
  
};
console.log(quantityPrice);


let message =`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${quantityPrice} บาท` //ตอบ
console.log(message);
