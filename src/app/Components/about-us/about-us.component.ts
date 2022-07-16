import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat=12.956669638116713;
  lng=80.133794851;
  constructor() { }

  ngOnInit(): void {
  }

}
