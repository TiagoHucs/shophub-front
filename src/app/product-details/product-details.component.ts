import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsVO } from '../product';
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
    private activateRoute: ActivatedRoute,
    private service: ProductDetailsService,
    private formBuilder: FormBuilder,
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
    window.localStorage.setItem('cart', JSON.stringify(this.form?.getRawValue()))
    console.log(this.form?.getRawValue())
    
  }

  changeImg(img: string) {
    this.img = img;
  }

  buildForm(product: ProductDetailsVO){
    this.form = this.formBuilder.group({
      id: [product.id, [Validators.required]],
      qtd: [1, [Validators.required]],
      size: [null, [Validators.required]],
      color: [null, [Validators.required]],
      value: [product.value, [Validators.required]], // valor seria recalculado para finalizar pedido
    });
    this.form.invalid
  }
  

}
