import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
// import { Product } from 'src/app/core/models/object-modal';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  // productForm!: FormGroup;
  updateForm!: FormGroup;
  constructor(
    private product: ProductService,
    private formbuilder: FormBuilder
  ) {}
  ProductData: any = [];
  ngOnInit() {
    this.getProducts();
    this.updateForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      productDesc: ['', [Validators.required]],
      mrp: ['', [Validators.required]],
      dp: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  getProducts() {
    this.product.getAllProducts().subscribe((res) => {
      console.log('res', res);
      this.ProductData = res;
    });
  }
  openModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
  updateForms(updateForm: any) {
    console.log(this.updateForm.value);
    this.product.createProduct(updateForm.value).subscribe(
      (res) => {
        console.log('res update', res);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
}
