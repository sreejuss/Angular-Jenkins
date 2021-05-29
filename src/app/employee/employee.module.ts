import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component'
import {ModalModule} from 'ngx-bootstrap/modal'
import {NgxPaginationModule} from 'ngx-pagination'; 
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { OrderModule } from 'ngx-order-pipe';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';

@NgModule({
  declarations: [
    LoginComponent,
    EmployeeDashComponent,
    EditTimesheetComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ]
})
export class EmployeeModule { }
