
// const originalPrice= 120;
// const discount= 18;

// const priceWithDiscount= (originalPrice*(100-discount))/100;

// console.log({
//     originalPrice,
//     discount,
//     priceWithDiscount
// });

function discount(originalPrice, discount) {
    let priceWithDiscount= (originalPrice*(100-discount))/100;
    return priceWithDiscount
};

function calculateDiscount() {
    const inputPrice= document.getElementById("ItemPrice");
    const inputDiscount= document.getElementById("Discount");

    const realPrice= inputPrice.value;
    const realDiscount= inputDiscount.value;

    const priceWithDiscount= discount(realPrice, realDiscount);
 
    const priceP= document.getElementById("priceP");
    priceP.innerText= "The price with discount is $ " + priceWithDiscount;
}