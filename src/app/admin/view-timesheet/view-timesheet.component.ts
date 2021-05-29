import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServService } from 'src/app/shared/service/admin-serv.service';

@Component({
  selector: 'app-view-timesheet',
  templateUrl: './view-timesheet.component.html',
  styleUrls: ['./view-timesheet.component.css']
})
export class ViewTimesheetComponent implements OnInit {

  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  timeSheet:any;
  constructor(private adminService:AdminServService,private router:Router) { }

  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData(){
    this.adminService.getTimeSheet().subscribe((res)=>{
      this.timeSheet=res;
           
    })
  }

  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
   
    else if(val=="empid"){
      this.order="empid";
      this.reverse=!this.reverse;
    }
    else if(val=="date"){
      this.order="date";
      this.reverse=!this.reverse;
    }
    else if(val=="from"){
      this.order="from";
      this.reverse=!this.reverse;
    }
    else if(val=="to"){
      this.order="to";
      this.reverse=!this.reverse;
    }
    else if(val=="total"){
      this.order="total";
      this.reverse=!this.reverse;
    }
  }

}
