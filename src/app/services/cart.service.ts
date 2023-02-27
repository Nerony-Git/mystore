import { Injectable, EventEmitter } from '@angular/core';
import Product from '../models/product';
import Cart from '../models/cart';
import Order from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  change: EventEmitter<Cart> = new EventEmitter();
  order!: Order;
  
  constructor() {
    this.emptyCart();
  }

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

  getOrder(): Order {
    const orderPlaced = this.order;
    this.setOrder('', '', '');
    this.emptyCart();

    return orderPlaced;
  }

  emptyCart(): void {
    this.cart = { items: null, totalCartPrice: 0 };
  }

  setOrder(name: string, address: string, creditCard: string): void {
    this.order = {
      cart: this.cart,
      name: name,
      address: address,
      creditCard: creditCard
    };
  }

  getCart(): Cart {
    return this.cart;
  }

  updateQty(pid: number, quantity: number): Cart {
    if (this.cart.items !== null && this.cart.items[pid] !== undefined) {
      if (quantity > 0) {
        const item = this.cart.items[pid];
        this.cart.totalCartPrice += (quantity - item.quantity) * item.product.price;
        item.quantity = quantity;
      } else {

        delete this.cart.items[pid];
      }
    }

    return this.cart;
  }

}
