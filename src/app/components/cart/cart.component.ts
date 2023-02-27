import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import CartProduct from 'src/app/models/cart-product';
import Cart from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  name: string = "";
  address: string = "";
  creditCard: string = "";
  cart!: Cart;
  cartProducts!: CartProduct[];

  constructor(
    private cartService: CartService,
    private router: Router
  ){}

  updateList(): void {
    if (this.cart.items !== null) {
      this.cartProducts = Object
      .keys(this.cart.items)
      .map((key) => (this.cart.items![parseInt(key)]));
    }
  }

  changedQty(cartProduct: CartProduct): void {
    this.cart = this.cartService.updateQty(
      cartProduct.product.id,
      cartProduct.quantity
    );

    this.updateList();
  }

  checkOut(): void {
    this.cartService.setOrder(
      this.name,
      this.address,
      this.creditCard
    );

    this.router.navigate(["/order"]);
  }

  ngOnInit(): void {
      this.cart = this.cartService.getCart();
      this.updateList();
  }

}
