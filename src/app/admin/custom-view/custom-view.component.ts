import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent implements OnInit {
  date1:any;
  date2:any;
  date3:any;
  date4:any;
  constructor(private empserv:EmployeeServService,private _router:Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  getByCustomDate(val:any){
    console.log(val);
    sessionStorage.setItem("date1",val.date1);
    sessionStorage.setItem("date2",val.date2);
    this._router.navigate(['/admin/custom-date-view'])
    

  }
  getByCustomYear(val:any){
    console.log(val);
    
    sessionStorage.setItem("year",val.year);
    this._router.navigate(['/admin/custom-year-view'])


  }
  getByCustomMonth(val:any){
    console.log(val);
    
    sessionStorage.setItem("year",val.year);
    sessionStorage.setItem("month",val.month);
    this._router.navigate(['/admin/custom-month-view'])

  }
}
