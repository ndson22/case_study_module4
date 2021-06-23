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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getList();

  }

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
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

}
