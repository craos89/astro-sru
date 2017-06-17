import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: '[app-selection]',
  templateUrl: 'selection.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/mainpack.scss']
})

export class SelectionComponent implements OnInit {
  public TotalPrice: number = 0;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public calculatePrice(price: number, priceTrail: string) {
    let gst = (price * 0.06);
    document.getElementById('price').innerHTML = "RM" + price.toString();
    document.getElementById('gst').innerHTML = "RM" + this.round(gst).toFixed(2).toString();
    document.getElementById('total').innerHTML = "RM" + this.round(price + gst).toFixed(2).toString();

    this.TotalPrice = this.round(this.nextNearest(price + gst));
    document.getElementById('totalRounding').innerHTML = "RM" + this.TotalPrice.toFixed(2).toString();

    if (this.TotalPrice >= 130) {
      document.getElementById('suggestion').style.display = "block";
    }
    else{
      document.getElementById('suggestion').style.display = "none";
    }
  }

  round(value) {
    return Math.round(value * 100) / 100;
  }

  nextNearest(value) {
    let factor = 0.05;
    return Math.round(value / factor) * factor;
  }

}
