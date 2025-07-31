import { Component } from '@angular/core';
import { ProductService } from '../../../services/products';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productsform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './productsform.html',
  styleUrl: './productsform.css',
})
export class Productsform {
  productForm: FormGroup;
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
}
