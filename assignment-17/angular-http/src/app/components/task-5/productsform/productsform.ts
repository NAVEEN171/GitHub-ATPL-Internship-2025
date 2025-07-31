import { Component, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsGenericService } from '../../../services/products-service';

@Component({
  selector: 'app-productsform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './productsform.html',
  styleUrl: './productsform.css',
})
export class Productsform implements OnInit {
  productForm: FormGroup;
  productId: string | null = null;
  constructor(
    private fb: FormBuilder,
    private ProductsGenericService: ProductsGenericService,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, [Validators.required, Validators.min(500)]],
      image: [''],
    });
  }
  onSubmit() {
    if (!this.productId) {
      this.ProductsGenericService.create(this.productForm.value).subscribe(
        (data) => {
          console.log(data);
        }
      );
    } else {
      console.log(this.productId);

      this.ProductsGenericService.update(
        parseInt(this.productId),
        this.productForm.value
      ).subscribe((data) => {
        console.log(data);
      });
    }
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (
      this.productId &&
      !isNaN(Number(this.productId)) &&
      Number(this.productId) > 0
    ) {
      this.ProductsGenericService.getById(parseInt(this.productId)).subscribe(
        (data) => {
          this.productForm.setValue({
            name: data.name,
            price: data.price,
            image: data?.image,
          });
        }
      );
    } else {
      this.productId = null;
    }
  }
}
