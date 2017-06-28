import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild(MainpackComponent) channelsComponent: MainpackComponent;
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
  }

  private maximize() {
    document.getElementById('popupSuggestion').className = '';
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

}
