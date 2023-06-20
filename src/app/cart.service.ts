import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
//a user defined service which is basically like a class of only actions to perform 
export class CartService {

  constructor(
    private http: HttpClient
  ) { }
  //holds the products in an array, reference via name "items"
  items: Product[] = [];
  addToCart(product: Product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    //accesses the user defined json file holding the shipping information per item
    return this.http.get<{type: string, price: number} []>
    ('/assets/shipping.json');
  }
}
