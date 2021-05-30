import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allEmployeesUrl,customdateUrl,customYearMonth,customYearUrl,leaveUrl,singleEmployeesUrl, singleleaveUrl, singleTimeSheet, timesheetUrl } from '../constant/constant';
import { IEmployee } from '../interface/employee.modal';
import { ILeave } from '../interface/leave.modal';
import { ITimesheet } from '../interface/timesheet.modal';

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

  addTimesheet(emp:any){
    return this._http.post(timesheetUrl,emp)

  }

  applyLeave(emp:any){
    return this._http.post(leaveUrl,emp)

  }

  getAllLeaveRecord():Observable<ILeave[]>{
    return this._http.get<ILeave[]>(leaveUrl);
  }

  getSingleLeave(courseId:number){
    const url:string=`${leaveUrl}/${courseId}`;
    return this._http.get<ILeave>(url);
  }

  updateAccount(emp:any){
    const url:string=`${allEmployeesUrl}`;
    return this._http.put(url,emp);
  }
  approveLeaveFun(emp:any){
    const url:string=`${leaveUrl}`;
    return this._http.put(url,emp);
  }

  updateTimesheet(emp:any){
    const url:string=`${timesheetUrl}`;
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

  getSingleTimeSheet(courseId:number){
    const url:string=`${timesheetUrl}/${courseId}`;
    return this._http.get<ITimesheet>(url);
  }

  getSingleTimeSheetById(courseId:number){
    const url:string=`${singleTimeSheet}/${courseId}`;
    return this._http.get<ITimesheet>(url);
  }

  getSingleEmp(courseId:number){
    const url:string=`${singleEmployeesUrl}/${courseId}`;
    return this._http.get<IEmployee>(url);
  }
  getSingleLeaveRecord(courseId:number){
    const url:string=`${singleleaveUrl}/${courseId}`;
    return this._http.get<ILeave>(url);
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

  getByCustomDate(d1:any,d2:any){

    const url:string=`${customdateUrl}/${d1}/${d2}`;
    return this._http.get<ITimesheet>(url);

  }
  getByCustomMonth(d1:any,d2:any){

    const url:string=`${customYearMonth}/${d1}/${d2}`;
    return this._http.get<ITimesheet>(url);

  }
  getByCustomYear(d1:any){

    const url:string=`${customYearUrl}/${d1}`;
    return this._http.get<ITimesheet>(url);

  }


  date1(d1:any){
    sessionStorage.setItem("date1",d1);
  }
  date2(d2:any){
    sessionStorage.setItem("date1",d2);
  }

}
