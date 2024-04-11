import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './_sections/banner/banner.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ServicesComponent } from './_sections/services/services.component';
import { PartnersComponent } from './_sections/partners/partners.component';

import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    ServicesComponent,
    PartnersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
