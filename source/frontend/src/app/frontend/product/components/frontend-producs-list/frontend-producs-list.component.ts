import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product';

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
    this.products = this.productService.getProducts();
    this.products.forEach((product:any) => {
      console.log(product[0].image )
    });

  }

}
