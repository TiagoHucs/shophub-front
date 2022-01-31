import { Component, OnInit } from '@angular/core';
import { ShopProductVO } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: ShopProductVO[] = [];
  total = 0;

  constructor() { }

  ngOnInit() {
    this.getCart();
  }

  getCart(){
    this.products = JSON.parse(localStorage.getItem('cart') || '[]');
    this.total = 0;
    this.products.forEach(p => {
      this.total += (p.value * p.qtd); 
    })
  }

  remove(id:string){
    var index = this.products.map(x => {
      return x.id;
    }).indexOf(id);
    this.products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.getCart();
  }

}
