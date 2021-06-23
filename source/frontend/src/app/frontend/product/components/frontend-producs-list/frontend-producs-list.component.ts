import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-frontend-producs-list',
  templateUrl: './frontend-producs-list.component.html',
  styleUrls: ['./frontend-producs-list.component.css']
})
export class FrontendProducsListComponent implements OnInit {

  products!: any;
  categories!: any;
  brands !: any;
  types !: any;
  filterPrice :any = [
    { fromPrice: 0, toPrice: 50 },
    { fromPrice: 50, toPrice: 100 },
    { fromPrice: 100, toPrice: 150 },
    { fromPrice: 150, toPrice: 200 },
    { fromPrice: 200, toPrice: 250 },
    { fromPrice: 200, toPrice: 250 },
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.productService.getListProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.products.forEach((product:any) => {
          product.image = `${environment.baseUrl}${product.image}`
          product.price = this.formatter.format(product.price);
        });
        this.categories = res.categories;
        this.brands = res.brands;
        this.types = res.types;
      }
    });
  }

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  getFilterProducts($event: any) {
    this.productService.filterProducts({
      filter: $event.target.parentElement.getAttribute('data-filter'),
      value: $event.target.parentElement.value
    }).subscribe({
      next: (res) => {
        this.products = res.products;
        this.products.forEach((product:any) => {
          product.image = `${environment.baseUrl}${product.image}`
          product.price = this.formatter.format(product.price);
        });
      },
      error: (res) => {
        console.log(res);
      }
    });
  }

  sortByPrice(fromPrice: number, toPrice: number) {
    this.productService.sortByPrice(fromPrice, toPrice).subscribe({
      next: (res) => {
        this.products = res.products;
        this.products.forEach((product:any) => {
          product.image = `${environment.baseUrl}${product.image}`
          product.price = this.formatter.format(product.price);
        })
      },
      error: (res) => {
        console.log(res);
      }
    });
  }
}
