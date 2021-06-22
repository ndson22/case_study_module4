import { BackendRoutingModule } from './backend-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendProductsListComponent } from './product/backend-products-list/backend-products-list.component';



@NgModule({
  declarations: [
    BackendProductsListComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule
  ]
})
export class BackendModule { }
