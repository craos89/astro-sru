import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
  templateUrl: 'ratecard.component.html'
})

export class RateCardComponent implements OnInit {

  @ViewChild(PackagesComponent) channelsComponent: PackagesComponent;
  @ViewChild(PreviewComponent) previewComponent: PreviewComponent;
  @ViewChild(SelectionComponent) selectionComponent: SelectionComponent;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
