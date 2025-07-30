import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  productForm: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private Productservice: ProductService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(500)]],
      image: [''],
    });
  }
  onSubmit() {
    console.log(this.productForm.value);
    this.Productservice.uploadOrInsertProduct(this.productForm.value);
  }
  ngOnInit(): void {
    this.isSubmitting$ = this.Productservice.isLoading;

    if (this.Productservice.selectedProduct) {
      let currentProduct = this.Productservice.selectedProduct;
      this.productForm.setValue({
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct?.image,
      });
    }
  }
}
