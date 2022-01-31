import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsVO } from '../product';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductDetailsVO = new ProductDetailsVO;
  img:string | undefined;
  color:string | undefined;
  size:string | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProductDetailsService) { }
  

  ngOnInit() {
    this.obterIdDaRota();
  }

  obterIdDaRota() {
    this.activateRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.getRecurso(id);
    });
  }

  getRecurso(id:any){
    this.service.get(id).subscribe( res => {
      this.product = res;
      this.img = this.product.img;
    })
  }

  addToCart(){
    window.localStorage.setItem('cart', JSON.stringify(this.product))
  }

  changeImg(img:string){
    this.img = img;
  }

  changeColor(color:string){
    this.color = color;
  }

  changeSize(size:string){
    this.size = size;
  }
}
