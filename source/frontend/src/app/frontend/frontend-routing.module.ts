import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontendHomeComponent } from './home/components/frontend-home/frontend-home.component';

import { FrontendProducsListComponent } from './product/components/frontend-producs-list/frontend-producs-list.component';
import { FrontendProductDetailComponent } from './product/components/frontend-product-detail/frontend-product-detail.component';
import { FrontendCartComponent } from './cart/components/frontend-cart/frontend-cart.component';

const routes: Routes = [
  {path: 'shop', component: FrontendProducsListComponent},
  {path: '', component: FrontendHomeComponent},
  {path: 'shop/detail/:id', component: FrontendProductDetailComponent},
  {path: 'shop/cart', component: FrontendCartComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
