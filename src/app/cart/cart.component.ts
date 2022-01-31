import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [
    { "id": 1, "name": "Nike", "value":3.4 },
    { "id": 2, "name": "Adidas", "value":33.4 },
    { "id": 3, "name": "Mizuno", "value":32.4 },
    { "id": 4, "name": "Havaiana", "value":3.4 },
    { "id": 5, "name": "Vans", "value":31.34 },
    { "id": 6, "name": "Pumma", "value":553.4 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
