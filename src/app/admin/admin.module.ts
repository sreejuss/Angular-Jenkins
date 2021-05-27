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
import {ModalModule} from 'ngx-bootstrap/modal'

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule

  ]
})
export class AdminModule { }
