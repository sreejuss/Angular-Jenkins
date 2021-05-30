import { Injectable } from '@angular/core';
import { adminLoginUrl, timesheetUrl } from '../constant/constant';
import { IAdmin } from '../interface/admin.modal';
import { HttpClient } from '@angular/common/http';
import { ITimesheet } from '../interface/timesheet.modal';

@Injectable({
  providedIn: 'root'
})
export class AdminServService {

  constructor(private _http:HttpClient) { }



  getLoginCredential(){
    return this._http.get<IAdmin[]>(adminLoginUrl);
  }

  signin(user:any){
    sessionStorage.setItem("user",user);
  }

  signout(){
    sessionStorage.removeItem("user");
  }
  getTimeSheet(){
    return this._http.get<ITimesheet[]>(timesheetUrl);
  }
  
}
