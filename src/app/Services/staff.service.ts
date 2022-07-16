import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaffLogin } from '../Models/staff-login';
import { StaffView } from '../Models/staff-view';
import { StaffMarks } from '../Models/staff-marks';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) {}

  loginStaff(login:StaffLogin):Observable<any>{
    let loginUrl="http://localhost:9095/staff-login";
    return this.http.post<any>(loginUrl,login);
  }

  viewStudents(view:StaffView):Observable<any>{
    let url="http://localhost:9095/viewStudents";
    return this.http.post<any>(url,view);
  }

  uploadMarks(mark:StaffMarks):Observable<any>{
    let url="http://localhost:9095/uploadMarks";
    return this.http.post<any>(url,mark);
  }
}
