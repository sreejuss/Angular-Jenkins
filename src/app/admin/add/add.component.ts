import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empObj:any=[];
  constructor(private empSer:EmployeeServService,private _router:Router) { }

  ngOnInit(): void {
  }
  createAccount(val:any){
    const empObj={
      empid: val.empid,
      name: val.name,
      email:val.email,
      password:val.email,
      phonenum:val.phonenum,
      designation:val.designation,
      age:val.age,
      gender:val.gender
    }
    this.empSer.addEmployee(empObj).subscribe(()=>{
      alert("Employee added successfully")
      this._router.navigate(['/admin/dash']) 
    })
  }
}
