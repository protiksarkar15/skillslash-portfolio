const product = {
    name: "Real Fruit Juice - Apple",
    mrp: 113,
    discount: 19,
    quantity: 1,
    isAd: true,
};

product.finalPrice = function() {
    console.log('Final Price: ', product.mrp, product.discount);
    return product.mrp - (product.discount/100*product.mrp);
}

console.log(product.finalPrice());