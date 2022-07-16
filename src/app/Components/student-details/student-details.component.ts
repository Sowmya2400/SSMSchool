import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StuInfo } from 'src/app/Models/stu-info';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  admnNo=StuInfo.admnNo;
  sname=StuInfo.sname;
  std=StuInfo.standard;
  sec=StuInfo.section;
  dob=StuInfo.dob;
  blood=StuInfo.blood;
  address=StuInfo.address;
  emailId=StuInfo.emailId;
  img=StuInfo.img;
  balance=StuInfo.balance;

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    if(StuInfo.loggedIn==false){
      this.router.navigate(['']);
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

  viewMarks(){
    this.router.navigate(['view-marks'])
  }
  pay(){
    this.router.navigate(['payment'])
  }
}
