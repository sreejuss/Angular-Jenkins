import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServService } from 'src/app/shared/service/admin-serv.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  uid:string="";
  upass:string="";
  adminData:any=[];

  constructor(private adminServ:AdminServService,private _router:Router) { }
  ngOnInit(): void {
  }
  checkData(){
    this.adminServ.getLoginCredential().subscribe((res)=>{
      this.adminData=res;
      const data=this.adminData.filter((item:any)=>(item.name==this.uid)&&(item.password==this.upass));
      if(data.length>0){
        this.adminServ.signin(this.uid)
        this._router.navigate(['admin/admin-dash'])
      }else{
        alert("invalid login credentials");
        this.uid="";
        this.upass="";
      }
    })
  
  }

}
