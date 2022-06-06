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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    HeaderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAo0O-52ig03zqsdN7Nzzzf9l5gXwnGcWA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
