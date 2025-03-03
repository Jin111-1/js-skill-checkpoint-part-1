// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
    function checkPassawordStrength(userPassword){
        if(userPassword.length<6){
            return "Weak";
        }else if(userPassword.length>=6 && userPassword.length <=10){
            return "Medium";
        }else if(userPassword.length>10){
            return "Strong";
        }
   }


console.log(checkPassawordStrength("1234567891011"));//ตอบ