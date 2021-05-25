import { Injectable } from '@angular/core';
import { adminLoginUrl } from '../constant/constant';
import { IAdmin } from '../interface/admin.modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServService {

  constructor(private _http:HttpClient) { }

  signin(user:any){
    sessionStorage.setItem("user",user);
  }
  getLoginCredential(){
    return this._http.get<IAdmin[]>(adminLoginUrl);
  }

  
  signout(){
    sessionStorage.removeItem("user");
  }

}
