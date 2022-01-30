import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [{name:'Tenis1'},{name:'Tenis2'},{name:'Tenis3'},{name:'Tenis4'},{name:'Tenis5'}]

  constructor(private service: ShopService) { }

  ngOnInit() {
    this.service.list().subscribe( res => {
      this.products = res;
    })
  }

}
