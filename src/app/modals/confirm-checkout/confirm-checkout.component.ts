import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent {

  title:string | null = null;
  amt: number | null = null;
  name: string = "";
  address: string = "";
  creditCard: string = "";

  constructor(
    public modalRef: MdbModalRef<ConfirmCheckoutComponent>,
    private cartService: CartService,
    private router: Router
    ){}

  checkOut(): void {
    
    this.cartService.setOrder(
      this.name,
      this.address,
      this.creditCard
    );

    this.router.navigate(["/order"]);
  }

}

