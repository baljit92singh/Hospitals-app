import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sideNavFlag') sideNavFlag: ElementRef;

  constructor(public sideNavService: SideNavService) { }

  ngOnInit() {
    this.sideNavService.sideNavFlag = this.sideNavFlag;
  }

}
