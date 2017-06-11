import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: '[app-preview]',
  templateUrl: 'preview.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss']
})

export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private previewDivPrefix = 'channelList.';

  public addChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card selected";

    /*let el = document.getElementById('channelList');
    let channelListInnerHTML='';
    channelListInnerHTML += "<div id='channelList." + packId + "'>";
    
    for (let entry of channels) {
      channelListInnerHTML += entry + "<br>";
    }

    el.innerHTML += channelListInnerHTML + "</div>";*/
  }

  public removeChannel(packId: string) {
    let el = document.getElementById(this.previewDivPrefix + packId);
    el.className = "card";
    /*console.log('removeChannel: ' + 'channelList.' + packId);
    let elem = document.getElementById('channelList.' + packId);
    elem.parentNode.removeChild(elem);*/
  }

}
