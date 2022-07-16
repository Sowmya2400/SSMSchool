import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MarkInfo } from 'src/app/Models/mark-info';
import { StuInfo } from 'src/app/Models/stu-info';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.css']
})
export class ViewMarksComponent implements OnInit {

  admnNo = StuInfo.admnNo;
  sname = StuInfo.sname;
  std = StuInfo.standard;
  sec = StuInfo.section;
  showTable: boolean = false;
  exam:String;
  sub1: String;
  sub2: String;
  sub3: String;
  sub4: String;
  sub5: String;
  mark1: number;
  mark2: number;
  mark3: number;
  mark4: number;
  mark5: number;
  rank: number;
  strength:number;
  total:number;
  markInfo: MarkInfo;

  
@ViewChild("showErrorElement") showErrorElement:ElementRef;

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
     if (StuInfo.loggedIn == false) {
      this.router.navigate(['']);
     }

  }

  showError(element, message){
    element.firstChild.textContent = message;
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

  viewResults(exam: String) {
    this.exam=exam
    this.markInfo = new MarkInfo(StuInfo.admnNo, exam);
    this.service.viewMarks(this.markInfo).subscribe(
      res => {
        if (res.Updated == "Yes") {
          this.mark1=res.Mark1;
          this.mark2=res.Mark2;
          this.mark3=res.Mark3;
          this.mark4=res.Mark4;
          this.mark5=res.Mark5;

          this.rank=res.Rank;
          this.total=res.Total;
          this.strength=res.Strength;

          this.sub1 = "English";
          if (StuInfo.standard <= 10) {
            this.sub2 = "II Language";
            this.sub3 = "Maths";
            this.sub4 = "Science";
            this.sub5 = "Social Science";
          }
          else {
            this.sub3 = "Maths";
            this.sub2 = "Physics";
            this.sub4 = "Chemistry"
            if (StuInfo.section == "A") {
              this.sub5 = "Biology"
            }
            else if (StuInfo.section == "B") {
              this.sub5 = "Computer Science";
            }
            else {
              this.sub3 = "Accountancy";
              this.sub4 = "Economics";
              this.sub5 = "Business Studies"
            }
          }
          this.showError(this.showErrorElement.nativeElement, "");
          this.showTable = true;
        }
        else{
          this.showError(this.showErrorElement.nativeElement, 
            "--------Marks have not been uploaded yet for "+this.exam+" !--------");
          this.showTable=false;

        }
      }
    )
  }

}
