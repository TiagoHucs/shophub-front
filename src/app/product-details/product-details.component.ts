import { Component, OnInit } from '@angular/core';
import { SimpleProductVO } from '../shop/shop-product';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: SimpleProductVO;

  constructor(private service: ProductDetailsService) { }

  ngOnInit() {
    console.log('init')
    // TODO: pegar o id da URL
    this.service.get('1').subscribe( res => {
      this.product = res;
    })
  }

}
