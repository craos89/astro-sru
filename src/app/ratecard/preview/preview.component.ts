import { Component, OnInit, Injectable } from '@angular/core';
import { SharedService, SharedData } from '../shared.service';

@Component({
  selector: '[app-preview]',
  templateUrl: 'preview.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/mainpack.scss', '../../../assets/css/preview.scss']
})

export class PreviewComponent implements OnInit {

  constructor(
    private sharedData: SharedData
  ) { }

  public packs = [];

  ngOnInit(): void {
    for (let mainpack of this.sharedData.mainpacks) {
      for (let packs of mainpack.pack) {
        this.packs.push(packs);
      }
    }
  }

  private previewDivPrefix = 'channelList.';

  public addChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card selected";

    el.setAttribute("style", "display:block");
    el.parentElement.setAttribute("style", "display:block");
  }

  public removeChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card unselected";

    let button = document.getElementById("hideAll");
    if (button.className === "btn btn-secondary float-right button-active") {
      el.setAttribute("style", "display:none");
      el.parentElement.setAttribute("style", "display:none");
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
      elems[i].parentElement.setAttribute("style", "display:block");
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
      elems[i].parentElement.setAttribute("style", "display:none");
    }
  }

  // this is the function for modal dialog
  public visible = false;
  public visibleAnimate = false;

  public show(packId: string): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);

    for (let pack of this.packs) {
      if (pack.id === packId) {
        let channelList = '';

        for (let channel of pack.channels) {
          channelList += channel + "<br>";
        }
        document.getElementById("previewChannelDiv").innerHTML = channelList

        continue
      }
    }
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

}
