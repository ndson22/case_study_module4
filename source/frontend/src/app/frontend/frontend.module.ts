import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendProducsListComponent } from './product/components/frontend-producs-list/frontend-producs-list.component';
import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';

@NgModule({
  declarations: [
  
    FrontendProducsListComponent,
       FrontendHeaderComponent,
       FrontendFooterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
