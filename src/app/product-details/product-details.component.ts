import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ProductDetailsVO, ShopProductVO } from '../product';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: ProductDetailsVO;
  img: string | undefined;
  form!: FormGroup;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private service: ProductDetailsService,
    private formBuilder: FormBuilder,
    private notifier: NotifierService,
    ) { }


  ngOnInit() {
    this.obterIdDaRota();
  }

  obterIdDaRota() {
    this.activateRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.getRecurso(id);
    });
  }

  getRecurso(id: any) {
    this.service.get(id).subscribe(res => {
      this.product = res;
      this.img = this.product.img;
      this.buildForm(this.product);
    })
  }

  addToCart() {
    var cartProducts = JSON.parse(localStorage.getItem('cart') || '[]');
    cartProducts.push(this.form?.getRawValue());
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    this.buildForm(this.product);
    this.notifier.notify("success", this.product.name + " added to cart");
    this.router.navigateByUrl('/cart');
  }

  changeImg(img: string) {
    this.img = img;
  }

  buildForm(product: ProductDetailsVO){
    this.form = this.formBuilder.group({
      id: [product.id, [Validators.required]],
      name: [product.name, [Validators.required]],
      qtd: [1, [Validators.required]],
      size: [null, [Validators.required]],
      color: [null, [Validators.required]],
      value: [product.value, [Validators.required]], 
    });

  }
  

}
