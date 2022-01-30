import { Component, OnInit } from '@angular/core';
import { SimpleProductVO } from './shop-product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: SimpleProductVO[] = [];

  constructor(private service: ShopService) { }

  ngOnInit() {
    this.service.list().subscribe( res => {
      this.products = res;
    })
  }

}
