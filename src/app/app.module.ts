import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './modals/add-to-cart/add-to-cart.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductsComponent,
    ProductsListComponent,
    AddToCartComponent,
    OrdersComponent,
    ProductDetailsComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
