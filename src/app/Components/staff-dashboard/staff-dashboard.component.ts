import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StaffDashboardStudents } from 'src/app/Models/staff-dashboard-students';
import { StaffInfo } from 'src/app/Models/staff-info';
import { StaffMarks } from 'src/app/Models/staff-marks';
import { StaffView } from 'src/app/Models/staff-view';
import { StuInfo } from 'src/app/Models/stu-info';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {


  std1=StaffInfo.std1;
  std2=StaffInfo.std2;
  std3=StaffInfo.std3;
  sec1=StaffInfo.sec1;
  sec2=StaffInfo.sec2;
  sec3=StaffInfo.sec3;
  sub1=StaffInfo.sub1;
  sub2=StaffInfo.sub2;
  sub3=StaffInfo.sub3;

  std;
  sub;
  sec;
  exam;
  showExam:boolean=false;
  showTable:boolean=false;

  staffview:StaffView;
  students:StaffDashboardStudents[]=[];

  length:number;
  it:number[]=[];
  mark:number[]=[];
  staffmarks:StaffMarks;

  uploadB:String[]=[];

  @ViewChild("remarksElement") remarksElement:ElementRef;

  constructor(private service:StaffService, private router:Router) { }

  ngOnInit(): void {
    if(!StaffInfo.loggedIn)
    this.router.navigate(['']);
  }
  logout(){
    StaffInfo.loggedIn=false;
    StaffInfo.staffId=null;
    StaffInfo.sname=null;
    this.router.navigate(['']);
  }
  remark(element, message){
    element.firstChild.textContent=message;
  }
  classClicked(n:number){
    this.students=[];
    this.mark=[];
    this.it=[];
    this.length=0;
    this.showExam=true;
    if(n==1){
      StaffInfo.std=StaffInfo.std1;
      StaffInfo.sec=StaffInfo.sec1;
      StaffInfo.sub=StaffInfo.sub1;
    }
    else if(n==2){
      StaffInfo.std=StaffInfo.std2;
      StaffInfo.sec=StaffInfo.sec2;
      StaffInfo.sub=StaffInfo.sub2;
    }
    else{
      StaffInfo.std=StaffInfo.std3;
      StaffInfo.sec=StaffInfo.sec3;
      StaffInfo.sub=StaffInfo.sub3;
    }
    this.std=StaffInfo.std;
    this.sec=StaffInfo.sec;
    this.sub=StaffInfo.sub;
  }
  examClicked(n:number){
    this.showTable=true;
    this.students=[];
    this.mark=[];
    this.it=[];
    this.length=0;
    if(n==1) {
      StaffInfo.exam="MidTerm1"
      this.exam="Mid-Term I"
    }
    else if(n==2){ 
      StaffInfo.exam="Term1"
      this.exam="Term I"
    }
    else if(n==3){
      StaffInfo.exam="MidTerm2"
      this.exam="Mid-Term II"
    } 
    else{
      StaffInfo.exam="Term2"
      this.exam="Term II"
    } 

    this.staffview=new StaffView(StaffInfo.std,StaffInfo.sec,StaffInfo.exam,StaffInfo.sub);
      this.service.viewStudents(this.staffview).subscribe(
        res=>{
          res.Students.forEach(element => {
              let s=new StaffDashboardStudents(element[0],element[1],element[2]);
              this.mark.push(element[2])
              this.students.push(s);
          });
          this.length=res.Length;
          for(let i=0;i<this.length;i++){
            this.it.push(i);
            this.uploadB[i]="Upload"
          }
        }
        
      )
      
  }

  upload(n:number,m:number,i:number){
    this.uploadB[i]="Uploading..."
    this.staffmarks=new StaffMarks(n,StaffInfo.exam,StaffInfo.sub,m);
    this.service.uploadMarks(this.staffmarks).subscribe(
      res=>{
        if(res.Done=="Yes"){
          alert("Uploaded Sucessfully for "+n)
          this.uploadB[i]="Upload"
        }
      }
    )
  }



}
