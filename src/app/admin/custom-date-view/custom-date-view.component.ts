import { Component, OnInit } from '@angular/core';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-custom-date-view',
  templateUrl: './custom-date-view.component.html',
  styleUrls: ['./custom-date-view.component.css']
})
export class CustomDateViewComponent implements OnInit {

  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  timeSheet:any;
  constructor(private empServ:EmployeeServService) { }

  ngOnInit(): void {

    this.empServ.getByCustomDate(sessionStorage.getItem("date1"),sessionStorage.getItem("date2")).subscribe((res)=>{
      this.timeSheet=res;
      console.log(res);
      
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
