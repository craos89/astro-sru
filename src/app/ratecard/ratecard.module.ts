import { NgModule } from '@angular/core';
import { RateCardComponent } from './ratecard.component';
import { RateCardRoutingModule } from './ratecard.routing.module';
import { CommonModule  } from '@angular/common';
import { PackagesComponent } from './packages/packages.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';

@NgModule({
  imports: [
    RateCardRoutingModule,
    CommonModule
  ],
  declarations: [RateCardComponent, PackagesComponent, PreviewComponent, SelectionComponent],
  providers: [
    PackagesComponent,
    PreviewComponent,
    SelectionComponent
  ],
})

export class RateCardModule { }
