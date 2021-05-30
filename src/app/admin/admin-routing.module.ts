import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomDateViewComponent } from './custom-date-view/custom-date-view.component';
import { CustomMonthViewComponent } from './custom-month-view/custom-month-view.component';
import { CustomViewComponent } from './custom-view/custom-view.component';
import { CustomYearViewComponent } from './custom-year-view/custom-year-view.component';
import { EditComponent } from './edit/edit.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';

const routes: Routes = [

  {path:"login",component:AdminLoginComponent},
  {path:"dash",component:AdminDashComponent},
  {path:"add",component:AddComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"view",component:ViewTimesheetComponent},
  {path:"custom",component:CustomViewComponent},
  {path:"custom-date-view",component:CustomDateViewComponent},
  {path:"custom-year-view",component:CustomYearViewComponent},
  {path:"custom-month-view",component:CustomMonthViewComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
