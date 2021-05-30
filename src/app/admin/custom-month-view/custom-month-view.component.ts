import { Component, OnInit } from '@angular/core';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-custom-month-view',
  templateUrl: './custom-month-view.component.html',
  styleUrls: ['./custom-month-view.component.css']
})
export class CustomMonthViewComponent implements OnInit {


  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  timeSheet:any;
  constructor(private empServ:EmployeeServService) { }

  ngOnInit(): void {
    const year=Number(sessionStorage.getItem("year"));
    const month=Number(sessionStorage.getItem("month"));
    this.empServ.getByCustomMonth(year,month).subscribe((res)=>{
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
