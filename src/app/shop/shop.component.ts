import { Component, OnInit } from '@angular/core';
import { GoblinService } from '../goblin.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  goblinList!: any[];
  goblins: any[] = [];  // DELETE?

  constructor(private GoblinService: GoblinService) {  }

  ngOnInit(): void {
    this.GoblinService.getAllGoblins().subscribe({
      next: (res: any) => {
        console.log(res);
        this.goblinList = res;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("Request complete");
      }
    })
  };

  addToCart(goblin: any) {
    
    if (!this.GoblinService.goblinInCart(goblin)) {  // Check if the goblin is already in the shooping cart, if not, carry on
      goblin.quantity = 1;  // Set the quantity to 1 
      this.GoblinService.addToCart(goblin); 
      this.goblins = [...this.GoblinService.getGoblin()];  // DELETE?
    }
  };

}
