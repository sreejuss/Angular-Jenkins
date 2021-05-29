import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
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
  leaveArray:any=[];

  constructor(private empService:EmployeeServService,private router:Router,private modalService:BsModalService) { }
  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData(){
    this.empService.getAllEmployeeRecord().subscribe((res)=>{
      this.empArray=res;      
    })

    this.empService.getAllLeaveRecord().subscribe((res)=>{
      this.leaveArray=res;      
    })
  }

  deleteEmployee(id:any){
    if(confirm(`Are you sure ? ${id}`)){
      this.empService.deleteEmp(id).subscribe(()=>this.fetchAllData())
      this.router.navigate(['/admin/dash'])
    }
   }

   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  logout(){
    if(confirm("Do you want to logout?")){
      this.empService.signout();
      this.router.navigate(['/'])
    }
    
  }
  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
    else if(val=="email"){
      this.order="email";
      this.reverse=!this.reverse;
    }
    else if(val=="age"){
      this.order="age";
      this.reverse=!this.reverse;
    }
    else if(val=="phonenum"){
      this.order="phonenum";
      this.reverse=!this.reverse;
    }
    else if(val=="designation"){
      this.order="designation";
      this.reverse=!this.reverse;
    }
    else if(val=="gender"){
      this.order="gender";
      this.reverse=!this.reverse;
    }
  }

}
