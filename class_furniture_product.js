
//declaring a class
/* class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil = new Product('pencil', 20, 2, 'P10');
*/
/* pencil;

//using expression creating object
const Product1 = class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getDiscountValue(){
        return this.discount
    }
    set setDiscountValue(value){
        this.discount = value;
    }
    discountValue(){
        return this.discount*this.price/100
    }
};

let chair = new Product1('chair', 499, 15, 'C10');
chair;
Product1.name;

chair.getDiscountValue
chair.setDiscountValue = 10
chair.getDiscountValue

chair.discountValue */ /*74.something */

class Product {
    constructor(itemName) {
        console.log('passed by Furniture' + itemName);
        this.itemName = itemName;
    }
    getItemName() {
        return this.itemName + " is a product";
    }
}

class Furniture extends Product {
    constructor(itemName) {
        super(itemName);
    }

    getItemName() {
        return this.itemName + " is a furniture";
    }
}

let pencil = new Product('pencil', 20, 2, 'P10');
let chair = new Furniture('chair', 499, 15, 'C10')

pencil
pencil.getItemName ();
chair
chair.getItemName();
