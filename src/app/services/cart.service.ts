import { Injectable, EventEmitter } from '@angular/core';
import Product from '../models/product';
import Cart from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  change: EventEmitter<Cart> = new EventEmitter();
  
  constructor() { }

  addProducts(product: Product, quantity: number): void {
    if (this.cart.items === null){
      this.cart.items = {};
    }

    if (this.cart.items[product.id] === undefined) {
      this.cart.items[product.id] = {
        product: product,
        quantity: quantity
      };
    }else {
      this.cart.items[product.id].quantity += quantity;
    }

    this.cart.totalCartPrice = 0;
    for (let i in this.cart.items) {
      const item = this.cart.items[i];
      this.cart.totalCartPrice += item.quantity * item.product.price;
    }
  }

}
