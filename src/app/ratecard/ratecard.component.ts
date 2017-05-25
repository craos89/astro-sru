import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
  templateUrl: 'ratecard.component.html'
})

export class RateCardComponent implements OnInit {

  @ViewChild(ChannelsComponent) channelsComponent: ChannelsComponent;
  @ViewChild(PreviewComponent) previewComponent: PreviewComponent;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
