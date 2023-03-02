import { Component, Input, Output, EventEmitter } from '@angular/core';
import CartProduct from 'src/app/models/cart-product';
import Product from 'src/app/models/product';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() quantityEmitter: EventEmitter<CartProduct> = new EventEmitter();

}
