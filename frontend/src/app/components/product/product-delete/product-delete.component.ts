import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  product: IProduct;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id ? id : '').subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService
      .delete(this.product.id ? this.product.id : 0)
      .subscribe((product) => {
        this.productService.showMessege('Produto Excluido!');
        this.router.navigate(['/products']);
      });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
