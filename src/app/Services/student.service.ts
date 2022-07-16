import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryPic } from '../Models/gallery-pic';
import { Observable } from 'rxjs';
import { ParentLogin } from '../Models/parent-login';
import { MarkInfo } from '../Models/mark-info';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

    viewGallery(gallery: GalleryPic):Observable<any>{
      let galleryUrl="http://localhost:9095/gallery";
      return this.http.post<any>(galleryUrl,gallery);
    }

    viewCircular(n:number):Observable<any>{
      let circularUrl="http://localhost:9095/circular";
      return this.http.post<any>(circularUrl,n);
    }

    loginParent(login:ParentLogin):Observable<any>{
      let loginUrl="http://localhost:9095/login";
      return this.http.post<any>(loginUrl,login);
    }
    viewMarks(mark:MarkInfo):Observable<any>{
      let markurl="http://localhost:9095/viewMarks";
      return this.http.post<any>(markurl,mark)
    }
    payment(login:ParentLogin):Observable<any>{
      let url="http://localhost:9095/payment";
      return this.http.post<any>(url,login)
    }
}
