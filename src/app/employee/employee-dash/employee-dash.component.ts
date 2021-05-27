import { Component, OnInit } from '@angular/core';
import{TemplateRef} from '@angular/core'
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  empArray:any;
  name:any;
  empid:any;
  empObj:any;
  modalRef:any;
  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  empObj1:any=[];
  constructor(private empServ:EmployeeServService,private modalService:BsModalService,private _router:Router) { }

  ngOnInit(): void {
    // this.name=localStorage.getItem("name")
    this.empid=localStorage.getItem("empid")
    this.empServ.getSingleEmp(this.empid).subscribe((res)=>{
      this.empObj={...res}
      console.log(this.empObj);      
    })
  }

  changePassword(val:any){

    const empObj1={
      id: val.id,
      // name: val.name,
      // balance:val.balance ,
      // city:val.city ,
      // state:val.state ,
      // pincode:val.pincode ,
      // status: "Active",
      // type:val.type,
     
      // email:val.email,
      password:val.password
    }
    this.empServ.changePassword(empObj1).subscribe(()=>{
      alert("data added successfully")
      // this._router.navigate(['/admin/admin-dash']) // automatic redirection after adding value
    })

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
    else if(val=="accnumber"){
      this.order="accnumber";
      this.reverse=!this.reverse;
    }
  }
  logOut(){

    if(confirm("Do you want to logout?")){
      // this.empServ.signout();
      localStorage.removeItem("empid");
      this._router.navigate(['/']);
    }

}
}
