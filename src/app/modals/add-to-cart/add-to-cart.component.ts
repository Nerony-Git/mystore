import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  title: string | null = null;
  qty: number | null = null;
  item: string | null = null;

  constructor(public modalRef: MdbModalRef<AddToCartComponent>){}

}
