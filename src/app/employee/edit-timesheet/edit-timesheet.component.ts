import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServService } from 'src/app/shared/service/employee-serv.service';

@Component({
  selector: 'app-edit-timesheet',
  templateUrl: './edit-timesheet.component.html',
  styleUrls: ['./edit-timesheet.component.css']
})
export class EditTimesheetComponent implements OnInit {
  empObj: any=[];
  id:number=0;
  tObj:any=[];
  editObj:any=[];
  empid:any;
  from: any;
  to: any;
  constructor(private empServ:EmployeeServService,private router:Router,private _ActRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.empid=localStorage.getItem("empid")
    this.empServ.getSingleEmp(this.empid).subscribe((res)=>{
      this.empObj={...res}
      console.log("empobj"+this.empObj); 
    })

    this._ActRoute.paramMap.subscribe((parm)=>{
      this.id=Number(parm.get('id'));
      console.log(this.id);
    });
    this.empServ.getSingleTimeSheetById(this.id).subscribe((res)=>{
      this.tObj={...res}
      console.log(this.tObj);      
    })
  }

  
  editTimesheet(val:any){
    console.log("value"+val);
    this.from=val.date+" "+val.from;
    console.log("from : ",this.from);
    this.to=val.date+" "+val.to;
    console.log("to : ",this.to);    
     const editObj={
      
      id:this.empObj.id,
      empid: this.empObj.empid,
      name: this.empObj.name,
      tdate:val.date,
      start:val.from+":00",
      end:val.to+":00",
      status:val.status,
      totalhours:0
    }
    console.log("edited "+editObj);
    
    this.empServ.updateTimesheet(editObj).subscribe(()=>{
      alert("Timesheet updated successfully")
      this.router.navigate(['/employee/dash']) 
    })
  }

}
