import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/app/models/order';
import CartProduct from 'src/app/models/cart-product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderDetails!: Order;
  orderProducts: CartProduct[] = [];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderDetails = this.cartService.getOrder();
    if (this.orderDetails?.cart?.items !== null){
      this.orderProducts = Object
      .keys(this.orderDetails.cart.items)
      .map((key) => (this.orderDetails.cart.items![parseInt(key)]));
    }

  }
}