import { Component, OnInit } from '@angular/core';
import { ShopProductVO } from '../product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: ShopProductVO[] = [];

  constructor(private service: ShopService) { }

  ngOnInit() {
    this.service.list().subscribe( res => {
      this.products = res;
    })
  }
  

}
