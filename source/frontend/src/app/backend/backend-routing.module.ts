import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BackendProductsListComponent } from './product/backend-products-list/backend-products-list.component';

const routes: Routes = [
  {path: 'products', component: BackendProductsListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class BackendRoutingModule { }
