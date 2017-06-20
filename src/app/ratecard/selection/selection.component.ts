import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: '[app-selection]',
  templateUrl: 'selection.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/mainpack.scss', '../../../assets/css/modal.scss']
})

export class SelectionComponent implements OnInit {
  public TotalPrice: number = 0;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  public calculatePrice(price: number, priceTrail: string) {
    let initialPrice, gst, totalPrice, totalPriceAfterRounding: string;

    let gstCalculation = price * 0.06;
    this.TotalPrice = this.round(this.nextNearest(price + gstCalculation));

    initialPrice = "RM" + price.toString();
    gst = "RM" + this.round(gstCalculation).toFixed(2).toString();
    totalPrice = "RM" + this.round(price + gstCalculation).toFixed(2).toString();
    totalPriceAfterRounding = "RM" + this.TotalPrice.toFixed(2).toString();

    // DOM price fields
    document.getElementById('price').innerHTML = initialPrice
    document.getElementById('gst').innerHTML = gst
    document.getElementById('total').innerHTML = totalPrice
    document.getElementById('totalRounding').innerHTML = totalPriceAfterRounding

    // Suggestion price fields
    if (this.TotalPrice >= 130) {
      this.sharedService.priceData.showSuggestion = true;
    }
    else {
      this.sharedService.priceData.showSuggestion = false;
    }

    // populate shoppingCart fields
    this.sharedService.shoppingCart.price = initialPrice;
    this.sharedService.shoppingCart.gst = gst;
    this.sharedService.shoppingCart.totalPrice = totalPrice;
    this.sharedService.shoppingCart.totalPriceAfterRounding = totalPriceAfterRounding;
  }

  public onContainerClicked(event: MouseEvent): void {
    this.sharedService.priceData.showSuggestion = false;
    let el = document.getElementById('suggestion');
    el.setAttribute("style", "display:none");
    el.setAttribute("opacity", "0");
  }

  round(value) {
    return Math.round(value * 100) / 100;
  }

  nextNearest(value) {
    let factor = 0.05;
    return Math.round(value / factor) * factor;
  }

  // private minimize() {
  //   document.getElementById('ModalBest').className = 'minimized';
  // }

  // private maximize() {
  //   document.getElementById('ModalBest').className = '';
  // }

}
