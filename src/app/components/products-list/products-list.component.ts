import { Component, Input } from '@angular/core';
import Product from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { AddToCartComponent } from 'src/app/modals/add-to-cart/add-to-cart.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [MdbModalService]
})
export class ProductsListComponent {
  @Input() product!: Product;
  quantity: number = 0;
  modalRef: MdbModalRef<AddToCartComponent> | null = null;

  constructor(
    private cartService: CartService,
    private modalService: MdbModalService
    ) {}

  addToCart(): void {
    this.cartService.addProducts(this.product, this.quantity);
    //alert(`We have put ${this.quantity} piece${this.quantity === 1 ? '' : 's'} of ${this.product.name} into your shopping cart.`);
    this.modalRef = this.modalService.open(AddToCartComponent, {
      data: { 
        title: 'Added to Cart',
        qty: this.quantity,
        item: this.product.name
      },
    });
    this.quantity = 0;
  }

  /*openModal() {
    this.modalRef = this.modalService.open(AddToCartComponent, {
      data: { title: 'Added to Cart'},
    });
  }*/
}
