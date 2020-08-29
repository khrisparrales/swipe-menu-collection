import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { AngularComponent } from './components/angular/angular.component';

import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
  };
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ViewtaskComponent,
    AngularComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
  ],
   providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
