// let product = {
//     proCode : "PRO123",
//     proName : "Samsung",
//     proType : "Electronics",
//     proPrice : 243234.24
// }
// console.log("**************Product Details**************");
// console.log(`Product Id :  ${product.proCode}, Product Name ${product.proName}`)

class Product{
    constructor(proCode,proName,proType,proPrice){
        this.proCode = proCode;
        this.proName = proName;
        this.proType = proType;
        this.proPrice = proPrice;
    }
}
let mobile = new Product("PRO111","Samsunt","Electronics",72842.2);
let clothing = new Product("PRO222","Jeans","Clothing",765);

let productArray = [mobile,clothing];
productArray.forEach(product=>console.log(`Product Id :  ${product.proCode}, Product Name ${product.proName}`))

let nameList = ["James","Smith","Anne","John","Jaden"];

let nameWithUpperCase = nameList.map(name=>name.toUpperCase());
console.log("*******************Map Function****************")
nameWithUpperCase.forEach(data=>console.log(data));
console.log("************************Filter Function****************")
let namesWithJ =  nameList.filter(name=>name.startsWith("J"));
namesWithJ.forEach(data=>console.log(data));
console.log("*****************Reduce Function******************")
let numArray = [2,4,5,6,7];
let sum = numArray.reduce((accumalator,number)=>accumalator+=number);

console.log(`sum : ${sum}`)























