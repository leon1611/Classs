'use strict'

class Product {
    constructor(description, price, stock) {
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    showInfo() {
        alert(`El producto es: ${this.description}, su precio es: $${this.price} dolares, y tiene en stock: ${this.stock} unidades`);
    }

    minusStock(sold) {
        sold = Number(prompt("Cuantas vendio:"));
        this.stock -= sold;
        alert(`Se vendieron ${sold} unidades. Stock restante: ${this.stock}`);
    }

    incrementStock(add) {
        add = Number(prompt("¿Cuántas unidades desea agregar?"));
        this.stock += add;
        alert(`Se agregaron ${add} unidades. Nuevo Stock: ${this.stock}`);
    }

    updatePrice(newPrice) {
        newPrice = Number(prompt('Ingresa el nuevo precio del producto'));
        this.price = newPrice;
        alert(`Nuevo Precio es: $${this.price}`);
    }
}

// Pass the product details as parameters to the Product class constructor
let product = new Product('TV', 100, 10);
product.showInfo();
product.minusStock();
product.incrementStock();
product.updatePrice();
product.showInfo();