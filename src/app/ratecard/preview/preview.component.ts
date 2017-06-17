import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: '[app-preview]',
  templateUrl: 'preview.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/mainpack.scss']
})

export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private previewDivPrefix = 'channelList.';

  public addChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card selected";

    el.setAttribute("style", "display:block");
  }

  public removeChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card unselected";

    let button = document.getElementById("hideAll");
    if (button.className === "btn btn-secondary float-right button-active") {
      el.setAttribute("style", "display:none");
    }
  }

  showAll() {
    let button = document.getElementById("showAll");
    button.className = "btn btn-secondary float-right button-active";
    button = document.getElementById("hideAll");
    button.className = "btn btn-secondary float-right";

    let elems = document.getElementsByClassName('card unselected');
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute("style", "display:block");
    }
  }

  hideUnselected() {
    let button = document.getElementById("showAll");
    button.className = "btn btn-secondary float-right";
    button = document.getElementById("hideAll");
    button.className = "btn btn-secondary float-right button-active";

    let elems = document.getElementsByClassName('card unselected');
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute("style", "display:none");
    }
  }

}
