import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Components/home/home.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './Services/student.service';
import { CircularComponent } from './Components/circular/circular.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { PrideComponent } from './Components/pride/pride.component';
import { ParentLoginComponent } from './Components/parent-login/parent-login.component';
import { FormsModule } from '@angular/forms';
import { StaffLoginComponent } from './Components/staff-login/staff-login.component';
import { StaffService } from './Services/staff.service';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ViewMarksComponent } from './Components/view-marks/view-marks.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { StaffDashboardComponent } from './Components/staff-dashboard/staff-dashboard.component';
import { PaymentSuccessfulComponent } from './Components/payment-successful/payment-successful.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    HeaderComponent,
    AboutUsComponent,
    FooterComponent,
    CircularComponent,
    DocumentsComponent,
    PrideComponent,
    ParentLoginComponent,
    StaffLoginComponent,
    StudentDetailsComponent,
    ViewMarksComponent,
    PaymentComponent,
    StaffDashboardComponent,
    PaymentSuccessfulComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAo0O-52ig03zqsdN7Nzzzf9l5gXwnGcWA'
    })
  ],
  providers: 
  [StudentService,
   StaffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
