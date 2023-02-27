import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/app/models/product';
import CartProduct from 'src/app/models/cart-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() quantityEmitter: EventEmitter<CartProduct> = new EventEmitter();

  constructor(private cartService: CartService) {}

  changedQty(quantity: number): void {
    this.quantityEmitter.emit({
      product: this.product,
      quantity: quantity
    });
  }

}
