import { BackendRoutingModule } from './backend-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendHeaderComponent } from './layouts/backend-header/backend-header.component';
import { BackendFooterComponent } from './layouts/backend-footer/backend-footer.component';
import { BackendSidebarComponent } from './layouts/backend-sidebar/backend-sidebar.component';
import { BackendHomeComponent } from './home/components/backend-home/backend-home.component';



@NgModule({
  declarations: [
    BackendHeaderComponent,
    BackendFooterComponent,
    BackendSidebarComponent,
    BackendHomeComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule
  ]
})
export class BackendModule { }
