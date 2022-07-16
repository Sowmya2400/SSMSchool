import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ParentLogin } from 'src/app/Models/parent-login';
import { StuInfo } from 'src/app/Models/stu-info';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  balance=StuInfo.balance;
  buttonName:String="Pay ₹"+this.balance;
  login:ParentLogin;
  cardNo:string
  cvv:string
  expiry:string
  cardCondn:boolean=false;

  @ViewChild("cardNoelement") cardNoelement: ElementRef;
  @ViewChild("cvvelement") cvvelement: ElementRef;
  @ViewChild("expiryelement") expiryelement: ElementRef;

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    if(StuInfo.loggedIn==false){
      this.router.navigate(['']);
    }
    if(StuInfo.balance>0){
      this.cardCondn=true
    }
    
  }

  logout(){
    StuInfo.loggedIn=false;
    StuInfo.admnNo=null;
    StuInfo.sname=null;
    StuInfo.standard=null;
    StuInfo.section=null;
    StuInfo.dob=null;
    StuInfo.blood=null;
    StuInfo.address=null;
    StuInfo.emailId=null;
    StuInfo.img=null;
    StuInfo.balance=null;
    this.router.navigate([''])
  }

  onCard(e): boolean {
    let v = e.lastChild.value
    if (!v) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - This field is required!";
      return false
    }
    else {
      if (v.length != 16) {
        e.lastChild.classList.add('input-alert')
        e.children[1].textContent = " - This field requires 16 numbers";
        return false
      }
      else{
      e.lastChild.classList.remove('input-alert')
      e.children[1].textContent = "";
      return true;
      }
    }
  }

  onCVV(e): boolean {
    let v = e.lastChild.value
    if (!v) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - This field is required!";
      return false
    }
    else {
      if (v.length != 3) {
        e.lastChild.classList.add('input-alert')
        e.children[1].textContent = " - This field requires 3 numbers";
        return false
      }
      else{
      e.lastChild.classList.remove('input-alert')
      e.children[1].textContent = "";
      return true;
      }
    }
  }
  onBlur(e){
    let v = e.lastChild.value
    if (!v) {
      e.lastChild.classList.add('input-alert')
      e.children[1].textContent = " - This field is required!";
      return false
    }
    else {
      e.lastChild.classList.remove('input-alert')
      e.children[1].textContent = "";
      return true;
    }
}
onInput(e){
  e.lastChild.classList.remove('input-alert')
  e.children[1].textContent = "";
  return true;
}

pay(){
  this.buttonName = "Please Wait...";
  this.login=new ParentLogin(StuInfo.admnNo,StuInfo.dob)
  this.service.payment(this.login).subscribe(
    res=>{
      if(res.Balance==0.0 && res.Payment=="Yes"){
        this.router.navigate(['payment-successful']);
      }
      else{
        alert("Server Error! Retry after sometime")
        this.buttonName="Pay ₹"+this.balance;
      }
    }
  )
}

}
