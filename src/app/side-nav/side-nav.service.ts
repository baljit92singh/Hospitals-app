import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  public sideNavFlag;
  constructor() { }
  public openSideNav() {
    this.sideNavFlag.toggle();
  }
}
