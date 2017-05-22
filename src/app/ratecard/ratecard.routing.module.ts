import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateCardComponent } from './ratecard.component';

const routes: Routes = [
  {
    path: '',
    component: RateCardComponent,
    data: {
        title: 'RateCard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateCardRoutingModule {}
