import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-frontend-product-detail',
  templateUrl: './frontend-product-detail.component.html',
  styleUrls: ['./frontend-product-detail.component.css']
})
export class FrontendProductDetailComponent implements OnInit {
  id!: number;
  product!: any;
  products!: any;

  // route: any;

  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getDetailProduct(this.id).subscribe({
      next: (res) => {
        this.product = res;
        this.product.image = `${environment.baseUrl}${this.product.image}`;
        this.product.price = this.formatter.format(this.product.price);

      }
    });
    this.getList();
  }
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  getList(){
    this.productService.getListProducts().subscribe({
      next: (res) => {
        this.products = res;

        this.products.forEach((product:any) => {

          product.image = `${environment.baseUrl}${product.image}`
          product.price = this.formatter.format(product.price);


        });
      }
    });

  }
}
