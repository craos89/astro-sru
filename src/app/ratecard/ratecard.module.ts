import { NgModule } from '@angular/core';
import { RateCardComponent } from './ratecard.component';
import { RateCardRoutingModule } from './ratecard.routing.module';
import { ChannelsComponent } from './channels/channels.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  imports: [
    RateCardRoutingModule
  ],
  declarations: [ RateCardComponent, ChannelsComponent, SelectionComponent ]
})
export class RateCardModule { }
