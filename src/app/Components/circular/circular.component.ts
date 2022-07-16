import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import {CircularModel } from '../../Models/circular-model'

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  datesList:String[]=[];
  categoryList:String[]=[];
  subjectList:String[]=[];
  filesList:String[]=[];
  iterator:number[]=[];
  count:number;


  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.loadCircular();
  }

  loadCircular(){
    this.service.viewCircular(4).subscribe(
      res=>{
        res.Dates.forEach(element=> {
            this.datesList.push(element);
        })
        res.Categories.forEach(element=>{
          this.categoryList.push(element);
        })
        res.Subjects.forEach(element=>{
          this.subjectList.push(element);
        })
        res.Files.forEach(element=>{
          this.filesList.push(element);
        })
        for(let i=0;i<res.Number;i++){
          this.iterator.push(i);
        }
      }
    )
    
  }


}
