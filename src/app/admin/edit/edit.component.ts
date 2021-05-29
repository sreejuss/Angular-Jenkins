import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number=0;
  empObj:any;
  constructor(private empServ:EmployeeServService,private _route:Router, private _ActRoute:ActivatedRoute) { }
  ngOnInit(): void { 
  this._ActRoute.paramMap.subscribe((parm)=>{
    this.id=Number(parm.get('id'));
    console.log(this.id);
  });
  this.empServ.getSingleRecord(this.id).subscribe((res)=>{
    this.empObj={...res}
    console.log(this.empObj);      
  })
}
  updateAccount(val:any){
    
    
    const empObj={
      id:this.id,
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
      this._route.navigate(['admin/dash']);
    })
  }

}
