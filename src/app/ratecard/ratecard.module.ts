import { NgModule } from '@angular/core';
import { RateCardComponent } from './ratecard.component';
import { RateCardRoutingModule } from './ratecard.routing.module';
import { ChannelsComponent } from './channels/channels.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  imports: [
    RateCardRoutingModule
  ],
  declarations: [RateCardComponent, ChannelsComponent, PreviewComponent, SelectionComponent],
  providers: [
    ChannelsComponent,
    PreviewComponent
  ],
})

export class RateCardModule { }
