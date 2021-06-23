import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendProducsListComponent } from './product/components/frontend-producs-list/frontend-producs-list.component';
import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';
import { FrontendHomeComponent } from './home/components/frontend-home/frontend-home.component';
import { FrontendProductDetailComponent } from './product/components/frontend-product-detail/frontend-product-detail.component';
import { FrontendCartComponent } from './cart/components/frontend-cart/frontend-cart.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [

    FrontendProducsListComponent,
       FrontendHeaderComponent,
       FrontendFooterComponent,
       FrontendHomeComponent,
       FrontendProductDetailComponent,
       FrontendCartComponent,


  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,

  ]
})
export class FrontendModule { }
