import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {


  swiperParams: any = {
    slidesPerView: 1,
    breakpoints: {
      1366: {
        slidesPerView: 4,
      }
    }
  };

  ngOnInit(): void {
    const swiperEl = document.getElementById('swiperContainerPartners');

    if(swiperEl) {
      Object.assign(swiperEl, this.swiperParams)
    }
  }

}
