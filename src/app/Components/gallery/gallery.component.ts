import { Component, OnInit } from '@angular/core';
import { GalleryPic } from 'src/app/Models/gallery-pic';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  active = 'campus';

  imgList:String[]=[];
  
  

  constructor(private studentService:StudentService) { 
  }

  ngOnInit(): void {
    this.loadImages(1)
  }

  loadImages(n:number){

    let galleryPic= new GalleryPic(n);
    this.imgList=[];
    this.studentService.viewGallery(galleryPic).subscribe(
      res=>{
        res.Images.forEach(element => {
          this.imgList.push(element);
        });
      }
    )
  }

}
