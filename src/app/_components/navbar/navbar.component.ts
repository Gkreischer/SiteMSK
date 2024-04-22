import { Component, Input, OnInit } from '@angular/core';
import { NgbScrollSpy } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() s!: NgbScrollSpy;

  constructor(
  ) {

    
   }

  ngOnInit(): void {
    
  }
}
