import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allEmployeesUrl,singleEmployeesUrl } from '../constant/constant';
import { IEmployee } from '../interface/employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServService {

  constructor(private _http:HttpClient) { }

  getAllEmployeeRecord():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(allEmployeesUrl);
  }

  signout(){
    sessionStorage.removeItem("user");
  }
  addEmployee(emp:any){
    return this._http.post(allEmployeesUrl,emp)
  }

  updateAccount(emp:any){
    const url:string=`${allEmployeesUrl}`;
    return this._http.put(url,emp);
  }
  changePassword(emp:any){
    const url:string=`${allEmployeesUrl}`;
    return this._http.put(url,emp);
  }


  getSingleRecord(courseId:number){
    const url:string=`${allEmployeesUrl}/${courseId}`;
    return this._http.get<IEmployee>(url);
  }

  getSingleEmp(courseId:number){
    const url:string=`${singleEmployeesUrl}/${courseId}`;
    return this._http.get<IEmployee>(url);
  }
  deleteEmp(id:any){
    const url:string=`${allEmployeesUrl}/${id}`;
    console.log(url);
    return this._http.delete(url);
  }

  
  signin(user:any){
    sessionStorage.setItem("user",user);
  }
  getLoginCredential(){
    return this._http.get<IEmployee[]>(allEmployeesUrl);
  }

}
