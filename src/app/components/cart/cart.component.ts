import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import CartProduct from 'src/app/models/cart-product';
import Cart from 'src/app/models/cart';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmCheckoutComponent } from 'src/app/modals/confirm-checkout/confirm-checkout.component';

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
  modalRef: MdbModalRef<ConfirmCheckoutComponent> | null = null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private modalService: MdbModalService
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

  confirmCheckOut(): void {

    this.modalRef = this.modalService.open(ConfirmCheckoutComponent, {
      data: { 
        title: 'Confirm Checkout',
        amt: this.cart.totalCartPrice,
        name: this.name,
        address: this.address
      },
    });

    // this.cartService.setOrder(
    //   this.name,
    //   this.address,
    //   this.creditCard
    // );

    // this.router.navigate(["/order"]);
  }

  ngOnInit(): void {
      this.cart = this.cartService.getCart();
      this.updateList();
  }

}
