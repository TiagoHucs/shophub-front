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
  sort: string = 'name';

  constructor(private service: ShopService) { }

  ngOnInit() {
    this.getProducts();
  }

  orderBy(ord:any){
    console.log(ord);
    this.sort = ord;
    this.getProducts();
  }

  getProducts(){
    this.service.list(this.sort).subscribe( res => {
      this.products = res;
    })
  }
  

}
