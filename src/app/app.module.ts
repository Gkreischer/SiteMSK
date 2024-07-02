import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './_sections/banner/banner.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { ServicesComponent } from './_sections/services/services.component';
import { PartnersComponent } from './_sections/partners/partners.component';

import { register } from 'swiper/element/bundle';
import { ContactComponent } from './_sections/contact/contact.component';
import { FormComponent } from './_sections/contact/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { B2bComponent } from './_sections/b2b/b2b.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatorComponent } from './_sections/creator/creator.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    ServicesComponent,
    PartnersComponent,
    ContactComponent,
    FormComponent,
    B2bComponent,
    CreatorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, NgbScrollSpyModule, NgbCollapseModule, MaskitoDirective, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
