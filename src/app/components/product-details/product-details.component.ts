import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddToCartComponent } from 'src/app/modals/add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private pidParams!: Subscription;
  private productData!: Subscription;
  pid!: number;
  product!: Product;
  quantity: number =0;
  product_size: string = "";
  product_color: string = "";
  modalRef: MdbModalRef<AddToCartComponent> | null = null;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private modalService: MdbModalService
  ) {
    this.product = { id: 0, name: 'apple', price: 0, url: '', description: ''};
  }

  addProduct(): void {

    this.cartService.addProducts(this.product, this.quantity);
    this.modalRef = this.modalService.open(AddToCartComponent, {
      data: { 
        title: 'Added to Cart',
        qty: this.quantity,
        item: this.product.name
      },
    });
    this.quantity = 0;

  }

  ngOnInit(): void {
      this.pidParams = this.route.params.subscribe((params) => {
        this.pid = parseInt(params['id']);
      });

      this.productData = this.productService.getProducts().subscribe((data) => {
        this.product = data.filter((product) => (product.id === this.pid))[0];
      });
  }

  ngOnDestroy(): void {
    this.pidParams.unsubscribe();
    this.productData.unsubscribe();
  }

}
