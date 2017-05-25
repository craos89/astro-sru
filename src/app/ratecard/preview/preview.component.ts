import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: '[app-preview]',
  templateUrl: 'preview.component.html'
})

@Injectable()
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addChannel(channels: Array<any>) {
    let el = document.getElementById('channelList');
    for (let entry of channels) {
      el.innerHTML += entry + "<br>";
    }
  }

}
