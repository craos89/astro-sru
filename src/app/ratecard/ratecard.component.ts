import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainpackComponent } from './mainpack/mainpack.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
  templateUrl: 'ratecard.component.html'
})

export class RateCardComponent implements OnInit {

  @ViewChild(MainpackComponent) channelsComponent: MainpackComponent;
  @ViewChild(PreviewComponent) previewComponent: PreviewComponent;
  @ViewChild(SelectionComponent) selectionComponent: SelectionComponent;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
