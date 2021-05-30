import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { OrderModule } from 'ngx-order-pipe';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { CustomViewComponent } from './custom-view/custom-view.component';
import { CustomDateViewComponent } from './custom-date-view/custom-date-view.component';
import { CustomYearViewComponent } from './custom-year-view/custom-year-view.component';
import { CustomMonthViewComponent } from './custom-month-view/custom-month-view.component'

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashComponent,
    EditComponent,
    AddComponent,
    ViewTimesheetComponent,
    CustomViewComponent,
    CustomDateViewComponent,
    CustomYearViewComponent,
    CustomMonthViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule.forRoot()

  ]
})
export class AdminModule { }
