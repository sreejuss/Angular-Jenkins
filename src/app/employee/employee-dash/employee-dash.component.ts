import { Component, OnInit } from '@angular/core';
import{TemplateRef} from '@angular/core'
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServService } from 'src/app/shared/service/admin-serv.service';
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
  from:any;
  to:any;
  id:any;
  timeid:any;
  timeObj:any=[];
  tsObj:any=[];
  leaveObj:any=[];
  welcomename:string="";
  lhistoryObj:any=[];
  newpass:any;
  confirmpass:any;
  oldpass:any;
  msg1:any;
  msg2:any;
  constructor(private empServ:EmployeeServService,private modalService:BsModalService,private _router:Router) { }

  ngOnInit(): void {
    // var timeStart = new Date("01/01/2007 " + valuestart).getHours();
  var timeEnd = new Date("01/01/2007 " + "01:01:01").getHours();
    console.log("jjhh"+timeEnd);
    
    this.empid=sessionStorage.getItem("empid")
    this.empServ.getSingleEmp(this.empid).subscribe((res)=>{
      this.empObj={...res}
      this.oldpass=this.empObj.password;
      console.log(this.oldpass);
      
      
      this.welcomename=this.empObj.name;
    })
    this.empServ.getSingleLeaveRecord(this.empid).subscribe((res)=>{
      this.lhistoryObj=res;
    })
  
    this.empServ.getSingleTimeSheet(this.empid).subscribe((res)=>{
      this.tsObj=res
      console.log("tsobj"+this.tsObj); 
    })
  }

  submitLeave(val:any){
  
    const leaveObj={
      empid: this.empObj.empid,
      name: this.empObj.name,
      leavedate:val.leavedate,
      nodays:val.nodays,
      leavetype:val.leavetype,
      status:"Submitted"
    }
    this.empServ.applyLeave(leaveObj).subscribe(()=>{
      alert("Leave Request Submitted")
      this._router.navigate(['/employee/dash']) 
    })
    
  }




  addTimesheet(val:any){    
    
  
     const timeObj={
      empid: this.empObj.empid,
      name: this.empObj.name,
      tdate:val.date,
      start:val.from+":00",
      end:val.to+":00",
      status:val.status,
      totalhours:1
      
    }
    console.log(timeObj);
    
    this.empServ.addTimesheet(timeObj).subscribe(()=>{
      alert("Timesheet added successfully")
      this._router.navigate(['/employee/dash']) 
    })
  }



  changePassword(val:any){
    this.newpass=val.npassword;
    this.confirmpass=val.cpassword;
    if(this.oldpass!=val.password){
       this.msg1="Incorrect Current Password!!";
      return this.msg1;
    }
    if(this.newpass!=this.confirmpass){
      this.msg2=" mismatch!!";
      return this.msg2;
    }
    const empObj1={
      id: this.empObj.id,
      name: this.empObj.name,
      designation:this.empObj.designation,
      email:this.empObj.email,
      password:val.cpassword,
      phonenum:this.empObj.phonenum,
      age:this.empObj.age,
      empid:this.empObj.empid,
      gender:this.empObj.gender
    }
    this.empServ.changePassword(empObj1).subscribe(()=>{
      alert("Password changed successfully")
      this._router.navigate(['/employee/dash']) // automatic redirection after adding value
    })
}

updateAccount(val:any){
    
  const empObj={
    id:this.empObj.id,
    empid:val.empid,
    name: val.name,
    email:val.email,
    phonenum:val.phonenum,
    designation:val.designation,
    gender:val.gender,
    age:val.age,
    password:this.empObj.password

    
  }
  this.empServ.updateAccount(empObj).subscribe(()=>{
    
    alert("data updated successfully");
    this._router.navigate(['employee/dash']);
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
