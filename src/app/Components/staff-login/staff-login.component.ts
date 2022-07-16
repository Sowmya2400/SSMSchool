import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StaffInfo } from 'src/app/Models/staff-info';
import { StaffLogin } from 'src/app/Models/staff-login';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {


  staffId:number;
  pwd:String;
  
  login:StaffLogin;

  fieldTextType: boolean=false;

  @ViewChild("staffIdElement") staffIdElement:ElementRef;
  @ViewChild("pwdElement") pwdElement:ElementRef;
  @ViewChild("showErrorElement") showErrorElement:ElementRef;

  constructor(private service:StaffService,private router:Router) { }

  ngOnInit(): void {
    console.log("Id:101;Password:123Ugofree")
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  staffIdCheck(a):boolean{
    let v=a.lastChild.value;
    if(!v){
      a.lastChild.classList.add('input-alert')
      a.children[1].textContent = " - This field is required!";
      return false;
    }
    else if (v.length < 3) {
      a.lastChild.classList.add('input-alert')
      a.children[1].textContent = " - Enter proper Staff Id!";
      return false;
    }
    else {
      a.lastChild.classList.remove('input-alert')
      a.children[1].textContent = "";
      return true;
    }
  }
  pwdCheck(e):boolean{
    let v=e.lastChild.value;
    if (!v) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - This field is required!";
      return false;
    }
    else if (v.length < 8) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - Minimum 8 characters is allowed!";
      return false;
    }
    else if (v.length > 20) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - Maximum 20 characters is allowed!";
      return false;
    }
    else {
      e.lastChild.classList.remove('input-alert')
      e.children[1].textContent = "";
      return true;
    }
  }
  onBlur(element){
    if(!element.lastChild.value){
      element.lastChild.classList.add('input-alert')
      element.children[1].textContent = " - This field is required!";
    }
    else{
      element.lastChild.classList.remove('input-alert')
      element.children[1].textContent = "";
    }
  }

  onInput(element){
    if(element.lastChild.value){
      element.lastChild.classList.remove('input-alert')
      element.children[1].textContent = "";
    }
  }

  showError(element, message){
    element.firstChild.textContent = message;
  }
  onSubmit(element){
    if(this.staffId && this.pwd){
      this.login= new StaffLogin(this.staffId,this.pwd)
      this.service.loginStaff(this.login).subscribe(
        res=>{
          if(res.Response=="OK"){
            StaffInfo.loggedIn=true;
            StaffInfo.staffId=this.staffId;
            StaffInfo.sname=res.name;
            StaffInfo.std1=res.Std1;
            StaffInfo.std2=res.Std2;
            StaffInfo.std3=res.Std3;
            StaffInfo.sec1=res.Sec1;
            StaffInfo.sec2=res.Sec2;
            StaffInfo.sec3=res.Sec3;
            StaffInfo.sub1=res.Sub1;
            StaffInfo.sub2=res.Sub2;
            StaffInfo.sub3=res.Sub3;
            this.router.navigate(['staff-dashboard'])
          }
          else if(res.Response=="INCORRECT"){
            this.showError(this.showErrorElement.nativeElement, "Incorrect Credentials!");
          }
          else{
            this.showError(this.showErrorElement.nativeElement, "Internal Server Error!");
          }
        }
      )
    }
    else{
      this.staffIdCheck(this.staffIdElement.nativeElement)
      this.pwdCheck(this.pwdElement.nativeElement)
    }
  }

}
