import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"dash",component:EmployeeDashComponent},
  { path:"edit/:id",component:EditTimesheetComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
