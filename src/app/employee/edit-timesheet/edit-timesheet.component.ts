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

    this.empid=sessionStorage.getItem("empid")
    console.log("from local"+this.empid);
    
    this.empServ.getSingleEmp(this.empid).subscribe((res)=>{
      this.empObj={...res}
      console.log("empobj"+this.empObj); 
    })

    this._ActRoute.paramMap.subscribe((parm)=>{
      this.id=Number(parm.get('id'));
      console.log("iddd "+this.id);
    });
    this.empServ.getSingleTimeSheetById(this.id).subscribe((res)=>{
      this.tObj=res
      console.log("t obj "+this.tObj);      
    })
  }

  
  editTimesheet(val:any){
    console.log("value"+val);
    console.log("date"+val.date);
    console.log("status"+val.status);

    console.log("from : ",val.from);
    console.log("to : ",val.to);    
     const editObj={
      
      id:this.id,
      empid: this.tObj.empid,
      name: this.tObj.name,
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
