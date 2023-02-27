import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent {

  title:string | null = null;
  amt: number | null = null;
  name: string | null = null;
  address: string | null = null;

  constructor(public modalRef: MdbModalRef<ConfirmCheckoutComponent>){}

}
