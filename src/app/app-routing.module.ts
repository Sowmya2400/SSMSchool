import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CircularComponent } from './Components/circular/circular.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { ParentLoginComponent } from './Components/parent-login/parent-login.component';
import { PaymentSuccessfulComponent } from './Components/payment-successful/payment-successful.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PrideComponent } from './Components/pride/pride.component';
import { StaffDashboardComponent } from './Components/staff-dashboard/staff-dashboard.component';
import { StaffLoginComponent } from './Components/staff-login/staff-login.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ViewMarksComponent } from './Components/view-marks/view-marks.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  
  {
    component:HomeComponent,
    path:''
  },
  {
    component:AboutUsComponent,
    path:'about-us'
  },
  {
    component:GalleryComponent,
    path:'gallery'
  },
  {
    component:CircularComponent,
    path:'circular'
  },
  {
    component:DocumentsComponent,
    path:'documents'
  },
  {
    component:PrideComponent,
    path:'pride'
  },
  { 
    component:ParentLoginComponent,
    path:'parent-login'
  },
  {
    component:StudentDetailsComponent,
    path:'student-details',
  },
  {
    component:ViewMarksComponent,
    path:'view-marks'
  },
  {
    component:PaymentComponent,
    path:'payment'
  },
  {
    component:PaymentSuccessfulComponent,
    path:'payment-successful'
  },
  {
    component:StaffLoginComponent,
    path:'staff-login'
  },
  {
    component:StaffDashboardComponent,
    path:'staff-dashboard'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
