import { Component, OnInit, OnDestroy } from '@angular/core';
import Product from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private productData!: Subscription;
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productData = this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    this.productData.unsubscribe();
  }

}
