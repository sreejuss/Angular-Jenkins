import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allEmployeesUrl } from '../constant/constant';
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

}
