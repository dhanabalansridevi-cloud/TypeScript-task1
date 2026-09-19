let customername :string ="saravanan";
const customerid : number =12345;
console.log(customername);
console.log(customerid);
enum mymembership {
    silver = "silver",
    gold = "gold",
    diamond = "diamond",
    regular = "regular"
}
let membershiptype :mymembership = mymembership.diamond,silver,gold,regular;


console.log(customername = customername)
let productCode: unknown = "SW101";
let codeLength = (productCode as string).length;

let category: string = "fan";
let stock: number =5;
let available: boolean = true;

product:`{"productName"}
quantity:{'quantity'}
price:{'price'};



let gst = (subtotal - discountAmount) * 18 / 100;
let finalAmount = subtotal - discountAmount + gst;
let bill = subtotal;
bill -= discountAmount;
bill += gst;




let productPrice: number = 1500;
let quantity: number = 4;
let stock: number= 5;
let ismember : boolean = true;

let product =
{name : "productname",
 price : productPrice,
 quantity : quantity
};

let products : string = "fan,table fan, ceeling fan";

let membershipType: string = "Gold";
let couponCode: string = "SAVE";
let city="chennai"


const validCoupon: string = "SAVE";
const couponDiscount: number = 10;
const gstRate: number = 18;
const deliveryCharge: number = 200;

if (stock>= quantity)
 {
    console.log("Product is Available");

    let subtotal: number = productPrice * quantity;
    console.log("Subtotal: rupees" + subtotal);
    let membershipDiscount: number = 0;

     if (membershipType === "diamond") 
    {
        membershipDiscount = subtotal * 20 / 100;
    }
    else if (membershipType === "Gold") 
    {
        membershipDiscount = subtotal * 15 / 100;
    }
    else if (membershipType === "Silver") 
    {
        membershipDiscount = subtotal * 10 / 100;
    }
    else {
        membershipDiscount = 0;
    }

    console.log("Membership Discount: rupees" + membershipDiscount);

    let amountAfterMembership: number = subtotal - membershipDiscount;
    let couponDiscountAmount: number = 0;

    if (couponCode === validCoupon) 
    {
        couponDiscountAmount = amountAfterMembership * couponDiscount / 100;

        console.log("Coupon is Valid");
        console.log("Coupon Discount: rupees" + couponDiscountAmount);
    }
    else { 
        console.log("Invalid Coupon");
        console.log("Coupon Discount: 0");
    }
let taxAmount: number = amountAfterMembership - couponDiscountAmount;

let gstAmount: number = taxAmount * gstRate / 100;

console.log("GST Amount: rupees" + gstAmount);
let billBeforeDelivery: number = taxAmount + gstAmount;
let finalBillAmount: number;

    if (billBeforeDelivery >= 2000) 
    {
        console.log("Free Delivery");
        finalBillAmount = billBeforeDelivery;
    }
    else {
        console.log("Delivery Charge: rupees" + deliveryCharge);
        finalBillAmount = billBeforeDelivery + deliveryCharge;
    }
    console.log("Final Bill Amount: rupees" + finalBillAmount);
}
else {
    console.log("Product is Out of Stock");
}
let productname: string= "table fan";
let productcatagory:string= "home appliance";
let productprice:number=  1500;
let productquantity:number = 4;
let  ProductStockAvailability:number =10;

let Subtotal:number= productquantity * productprice;
let ProductDiscount:number = 0;
let GSTAmount:number =0;
let FinalBillAmount:number =0;


ProductDiscount =  ProductDiscount/100;
ProductDiscount = Subtotal *  ProductDiscount;
Subtotal=Subtotal - ProductDiscount;
GSTAmount=GSTAmount/100;
FinalBillAmount=FinalBillAmount * GSTAmount;

console.log(ProductDiscount);
console.log(Subtotal);
console.log(GSTAmount);
console.log(FinalBillAmount);

const customerName: string = "Saravanan";
const customerEmail: string = "saravanan@hotmail.com";


if (stock > 0) 
    {
    console.log("Product is available.");
    console.log("Continue Purchase");
    const subtotal: number = productPrice * quantity;
    let discountRate: number = 0;

    if (membershipType === "Gold") 
    {
        discountRate = 10;
    } else if (membershipType === "Silver") 
    {
        discountRate = 5;
    } else 
    {
        discountRate = 0;
    }

let orderStatus: string
let discountamount: number  = (subtotal * discountRate) / 100;
const amountAfterDiscount: number = subtotal - discountamount;


const finalPayableAmount: number = amountAfterDiscount + GSTAmount + deliveryCharge;

orderStatus = "Order Confirmed";

let couponValid = true;

if (couponValid && isMember) {
    console.log("Coupon and membership are valid.");
}


console.log("Updated quantity:", quantity);
console.log("Reduced quantity:", quantity);

let deliveryCharge = finalAmount >= 1500 ? 0 : 50;

console.log("Delivery:", deliveryCharge === 0 ? "Free Delivery" : "Delivery Charge");

if (stock > 0) {
    console.log("Product is available");
}

if (couponValid) {
    console.log("Coupon is valid");
} else {
    console.log("Coupon is invalid");
}

if (isMember) {
    console.log("Member discount applied");
} else if (subtotal >= 5000) {
    console.log("Special discount applied");
} else {
    console.log("No additional discount");
}
if (stock > 0) {
    if (couponValid) {
        console.log("Product available and coupon applied.");
    }
}


let membershipType = "Gold";

switch (membershipType) {
    case "Gold":
        console.log("15% membership discount");
        break;
    case "Silver":
        console.log("10% membership discount");
        break;
    case "diamond":
        console.log("20% membership discount");
        break;
    default:
        console.log("No membership discount");
}

console.log(
Customer: {customerName}
Product: {productName}
Quantity: {quantity}
Subtotal: {subtotal}
Discount: {discountAmount}
GST: {gst}
Delivery: {deliveryCharge}
Final Amount: {finalAmount + deliveryCharge});