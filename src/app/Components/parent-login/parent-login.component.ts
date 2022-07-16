import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ParentLogin } from 'src/app/Models/parent-login';
import { StuInfo } from 'src/app/Models/stu-info';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent implements OnInit {

  admnNo:number;
  dob:Date;

  login:ParentLogin;

@ViewChild("admnNoElement") admnNoElement:ElementRef;
@ViewChild("dobElement") dobElement:ElementRef;
@ViewChild("showErrorElement") showErrorElement:ElementRef;

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    console.log("AdmnNo:1001,DOB:22-10-2006")
  }
 

 admnNoCheck(a):boolean{
    let v=a.lastChild.value;
    if(!v){
      a.lastChild.classList.add('input-alert')
      a.children[1].textContent = " - This field is required!";
      return false;
    }
    else if (v.length < 4) {
      a.lastChild.classList.add('input-alert')
      a.children[1].textContent = " - Enter proper Admn No!";
      return false;
    }
    else {
      a.lastChild.classList.remove('input-alert')
      a.children[1].textContent = "";
      return true;
    }
  }
  
  dobCheck(d):boolean{
    let v=d.lastChild.value;
    if(!v){
      d.lastChild.classList.add('input-alert')
      d.children[1].textContent = " - This field is required!";
      return false;
    }
    else {
      d.lastChild.classList.remove('input-alert')
      d.children[1].textContent = "";
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
    if(this.admnNo && this.dob){
      this.login= new ParentLogin(this.admnNo,this.dob);
      this.service.loginParent(this.login).subscribe(
        res=>{
          if(res.Response=="OK"){
            StuInfo.loggedIn=true;
            StuInfo.admnNo=res.AdmnNo;
            StuInfo.sname=res.Name;
            StuInfo.standard=res.Standard;
            StuInfo.section=res.Section;
            StuInfo.dob=res.DOB
            StuInfo.blood=res.BloodGroup;
            StuInfo.address=res.Address;
            StuInfo.emailId=res.EmailId;
            StuInfo.img=res.ImageFile;
            StuInfo.balance=res.Balance
            this.router.navigate(['student-details'])
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
      this.admnNoCheck(this.admnNoElement.nativeElement)
      this.dobCheck(this.dobElement.nativeElement)
    }
  }
}
