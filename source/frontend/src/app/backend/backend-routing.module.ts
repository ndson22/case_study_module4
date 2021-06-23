import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BackendHomeComponent } from './home/components/backend-home/backend-home.component';
import { BackendProductsListComponent } from './product/backend-products-list/backend-products-list.component';
const routes: Routes = [
  {path: 'home', component: BackendHomeComponent},
  {path: 'products', component: BackendProductsListComponent}

];

@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],

})
export class BackendRoutingModule { }
