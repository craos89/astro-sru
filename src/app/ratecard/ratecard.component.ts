import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MainpackComponent } from './mainpack/mainpack.component';
import { PreviewComponent } from './preview/preview.component';
import { SelectionComponent } from './selection/selection.component';
import { SharedService } from './shared.service';

@Component({
  templateUrl: 'ratecard.component.html',
  styleUrls: ['../../assets/css/modal.scss']
})

export class RateCardComponent implements OnInit {

  @Output() someCustomEvent = new EventEmitter<number>();

  @ViewChild(MainpackComponent) mainpackComponent: MainpackComponent;
  @ViewChild(PreviewComponent) previewComponent: PreviewComponent;
  @ViewChild(SelectionComponent) selectionComponent: SelectionComponent;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  private minimize() {
    document.getElementById('popupSuggestion').className = 'minimized';
    document.getElementById('suggestionButton').className = 'button-maximize';
  }

  private maximize() {
    document.getElementById('popupSuggestion').className = '';
    document.getElementById('suggestionButton').className = 'button-maximize hideDiv';
  }

  toogleSlide() {
    let toogleText = document.getElementById("toogleBtnHighlight").innerText;
    if (toogleText === "Back") {
      document.getElementById("toogleBtnHighlight").innerText = "View";
      document.getElementById("toogleBtnText").innerText = "List of Channel";
    }
    else {
      document.getElementById("toogleBtnHighlight").innerText = "Back";
      document.getElementById("toogleBtnText").innerText = "to Selection";
    }

    let box1 = document.querySelector('.rtl') // Using a class instead, see note below.
    let box2 = document.querySelector('.ltr') // Using a class instead, see note below.

    box1.classList.toggle('active');
    box2.classList.toggle('active');
  }

  superPackShow(divName) {
    document.getElementById("sp1").style.display = 'none';
    document.getElementById("sp2").style.display = 'none';
    document.getElementById("sp3").style.display = 'none';
    document.getElementById("sp4").style.display = 'none';

    document.getElementById(divName).style.display = 'block';
  }

  selectPack(packSelected) {
    // this.someCustomEvent.emit(packSelected);
    this.mainpackComponent.selectPack();
  }

}
