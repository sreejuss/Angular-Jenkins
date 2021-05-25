import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServService } from 'src/app/shared/service/admin-serv.service';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  empArray:any=[];
  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  modalRef: any;

  constructor(private empService:EmployeeServService,private router:Router) { }

  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData(){
    this.empService.getAllEmployeeRecord().subscribe((res)=>{
      this.empArray=res;
           
    })
  }

  logout(){
    if(confirm("Do you want to logout?")){
      this.empService.signout();
      this.router.navigate(['/'])
    }
    
  }

}
