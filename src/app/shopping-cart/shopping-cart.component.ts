import { Component, OnInit } from '@angular/core';
import { GoblinService } from '../goblin.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  goblins: any[] = [];
  goblinTax: number = 0.2

  constructor(private GoblinService: GoblinService) {}

  ngOnInit(): void {
    this.goblins = this.GoblinService.getGoblin();
  }

  // Updates local storage when quantity is changed
  qtyChange(goblin: any) {
    this.GoblinService.updateQuantity(goblin);
  }

  // Remove goblin from cart
  removeFromCart(goblin: any) {
    this.GoblinService.removeGoblin(goblin);
    this.goblins = this.GoblinService.getGoblin();
  }

  // Calculate cart total
  get subTotal() {
    return this.goblins.reduce(
      (sum, goblin) => ({
        quantity: 1,
        price: sum.price + goblin.quantity * goblin.price
      }),
      {quantity: 1, price: 0}
    ).price;
  }

  // Save subTotal to local storage
  saveSubTotal() {
    localStorage.setItem('subTotal', JSON.stringify(this.subTotal));
    console.log(this.subTotal)
  }

}
