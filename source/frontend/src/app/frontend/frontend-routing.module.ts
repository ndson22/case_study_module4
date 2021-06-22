import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FrontendProducsListComponent } from './product/components/frontend-producs-list/frontend-producs-list.component';

const routes: Routes = [
  {path: 'shop', component: FrontendProducsListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class FrontendRoutingModule { }
