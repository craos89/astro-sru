import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
    templateUrl: 'ratecard.component.html'
})
export class RateCardComponent implements OnInit {
  @ViewChild(ChannelsComponent) channelsComponent: ChannelsComponent
  @ViewChild(SelectionComponent) selectionComponent: SelectionComponent

  constructor( ) { }

  ngOnInit(): void {    
  }

  ngAfterViewInit() {
    // After the view is initialized, this.child_component_name will be available
  }
}
