import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StuInfo } from 'src/app/Models/stu-info';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css']
})
export class PaymentSuccessfulComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!StuInfo.loggedIn){
      this.router.navigate([''])
    }
  }
  route(){
    this.router.navigate([''])
    this.logout();
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

}
