import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend-producs-list',
  templateUrl: './frontend-producs-list.component.html',
  styleUrls: ['./frontend-producs-list.component.css']
})
export class FrontendProducsListComponent implements OnInit {
  products !: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getProducts();
  }
}
