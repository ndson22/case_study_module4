import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackendHomeComponent } from './home/components/backend-home/backend-home.component';

const routes: Routes = [
  {path: 'home', component: BackendHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class BackendRoutingModule { }
