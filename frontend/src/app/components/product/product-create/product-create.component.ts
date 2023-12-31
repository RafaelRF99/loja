import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    if (this.product.price !== null) {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessege('Produto criado!');
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.showMessege('Preço inválido!');
    }
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
