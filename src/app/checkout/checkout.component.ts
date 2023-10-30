import { Component, OnInit } from '@angular/core';
import { GoblinService } from '../goblin.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  goblins: any[] = [];
  goblinTax: number = 0.2;
  subTotal: any = 0;
  
  constructor(private GoblinService: GoblinService) {}

  ngOnInit(): void {
    this.GoblinService.loadCart();
    this.goblins = this.GoblinService.getGoblin();
    this.subTotal = this.GoblinService.loadSubTotal();
  }
}
