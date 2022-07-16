import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ["assets/gallery/campus1.jpg","assets/gallery/celebrations2.jpg","assets/gallery/campus5.jpg"];

  constructor() { }

  ngOnInit(): void {
  }
  home(){
    window.scrollTo(0,0);
  }
}
