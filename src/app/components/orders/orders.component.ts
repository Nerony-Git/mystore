import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Order from 'src/app/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderDetails!: Order;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.orderDetails = this.cartService.getOrder();
  }
}
