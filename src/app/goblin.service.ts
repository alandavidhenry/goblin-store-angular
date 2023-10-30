import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoblinService {

  // Empty array ready to have goblins added to it
  goblins: any[] = [];
  subTotal: any = 0;

  // Inject Http Client into constructor
  constructor(private http: HttpClient) { }

  // Get all goblin data from JSON file
  getAllGoblins() {
    return this.http.get('assets/data.json');
  };

  // Get all goblins saved in the 'goblins' array
  getGoblin() {
    return this.goblins;
  };

  // Save 'goblins' array to local storage
  saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.goblins));
  };

  // Add goblin to cart and save in local storage
  addToCart(addedGoblin: any) {
    this.goblins.push(addedGoblin);
    this.saveCart();
  };

  // Update goblin quantity and save in local storage
  updateQuantity(goblin: any) {
    this.saveCart();
  };

  // Load cart from local storage (or return an empty array)
  loadCart() {
    this.goblins = JSON.parse(localStorage.getItem('cartItems') as any) || [];
  };

  // Find goblin by id
  goblinInCart(goblin: any) {
    return this.goblins.findIndex((x: any) => x.id === goblin.id) > -1;
  };

  // Remove a goblin from the cart
  removeGoblin(goblin: any) {
    const index = this.goblins.findIndex((x: any) => x.id === goblin.id);
    if (index > -1) {
      this.goblins.splice(index, 1);
      this.saveCart();
    }
  };

  // Clear all from local storage
  clearGoblins() {
    localStorage.clear();
  };

  // Load subTotal from local storage (or return 0)
  loadSubTotal() {
    this.subTotal = JSON.parse(localStorage.getItem('subTotal') as any);
    return this.subTotal;
  };
}
