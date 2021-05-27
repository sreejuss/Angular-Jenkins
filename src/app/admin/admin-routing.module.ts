import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {path:"login",component:AdminLoginComponent},
  {path:"dash",component:AdminDashComponent},
  {path:"add",component:AddComponent},
  {path:"edit/:id",component:EditComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
