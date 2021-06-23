import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-frontend-cart',
  templateUrl: './frontend-cart.component.html',
  styleUrls: ['./frontend-cart.component.css']
})
export class FrontendCartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

}
