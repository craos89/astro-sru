import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateCardComponent } from './ratecard.component';
import { RateCardRoutingModule } from './ratecard.routing.module';
import { SharedService } from './shared.service';
import { MainpackComponent } from './mainpack/mainpack.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  imports: [
    RateCardRoutingModule,
    CommonModule
  ],
  declarations: [RateCardComponent, MainpackComponent, PreviewComponent, SelectionComponent],
  providers: [
    MainpackComponent,
    PreviewComponent,
    SelectionComponent
  ],
})

export class RateCardModule { }
