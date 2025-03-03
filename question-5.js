// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (products , promotionCode){
  if (promotionCode ==="SALE50"){
    return "ได้รับส่วนลด 50% มูลค่าสินค้ารวม "+ (products-((products)*0.5));
  }else if (promotionCode ==="SALE20"){
    return "ได้รับส่วนลด 20% มูลค่าสินค้ารวม " + (products-((products)*0.2));
  }else if (promotionCode === ""){
    return "ไม่ได้รับส่วนลด มูลค่าสินค้ารวม "+(products)+" บาท";
  }
}
console.log(calculateTotalPrice(15,""))//ตอบ