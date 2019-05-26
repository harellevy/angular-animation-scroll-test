import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimComponent } from './animation-controller/animation-controller.component';
import { TopSectionComponent } from './sections/top/top-section.component';
import { MiddleSectionComponent } from './sections/middle/middle-section.component';
import { BottomSectionComponent } from './sections/bottom/bottom-section.component';
import { ImageSquaresComponent } from './sections/image-component/image-squares.component';
import { HeaderComponent } from './layout/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimComponent,
    TopSectionComponent,
    MiddleSectionComponent,
    BottomSectionComponent,
    ImageSquaresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeadroomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
