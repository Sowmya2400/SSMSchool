import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  iterator:number[]=[0,1,2,3,4];
  doc_titles:String[]=['Leave Application','Admission Form','Change of Mode of Transport',
                        'Change of Student Details','TC Application']

  constructor() { }

  ngOnInit(): void {
  }

}
