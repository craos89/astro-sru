import { Component, OnInit } from '@angular/core';
import { SharedService } from '../ratecard/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './custom-layout.component.html',
  styleUrls: ['../../assets/css/custom-layout.scss']
})
export class CustomLayoutComponent implements OnInit {

  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void { }
}
