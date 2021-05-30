import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empid:string="";
  upass:string="";
  empData:any=[];
  name:any;
  constructor(private empServ:EmployeeServService,private _router:Router) { }

  ngOnInit(): void {
  }
  checkData(){
    this.empServ.getLoginCredential().subscribe((res)=>{
      this.empData=res;
      const data=this.empData.filter((item:any)=>((Number(item.empid))==Number(this.empid))&&(item.password==this.upass));
      console.log();
    
      if(data.length>0){
        this.empServ.signin(this.empid)
        sessionStorage.setItem("empid",this.empid)
        this._router.navigate(['employee/dash'])
      }else{
        alert("invalid login credentials");
        this.empid="";
        this.upass="";
      }
    })
  
  }

}
