import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbScrollSpy } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() s!: NgbScrollSpy;
  isMenuCollapsed: boolean = true;

  constructor(
  ) {

    
   }

  ngOnInit(): void {
    
  }
}
