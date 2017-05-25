import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: '[app-channels]',
  templateUrl: 'channels.component.html',
})

export class ChannelsComponent implements OnInit {
  @Input() count = 0;
  @Output() result = new EventEmitter<number>();

  increment() {
    this.count++;
    this.result.emit(this.count);
  }

  // channel name
  public pack = {
    as: {
      packName: "Astro Family", packContent: [
        { id: "as.1", name: "Family" }
      ]
    },
    pp: {
      packName: "Astro Family", packContent: [
        { id: "pp.1", name: "Sport", channels: ["channel_1", "channel_2", "channel_3"] },
        { id: "pp.2", name: "Dynasty", channels: ["channel_4", "channel_5", "channel_6"] },
        { id: "pp.3", name: "Movies", channels: ["channel_7", "channel_8", "channel_9"] }
      ]
    },
    mp: {
      packId: "pp", packName: "Astro Family", packContent: [
        { id: "mp.1", name: "News" },
        { id: "mp.2", name: "Kids" },
        { id: "mp.3", name: "Learning" },
        { id: "mp.4", name: "Variety" }
      ]
    }
  }
  ;

  constructor(
    private previewComponent: PreviewComponent
  ) { }

  ngOnInit(): void {
  }

  public reCalc(e) {
    var checkbox = e.target;
    if (checkbox.checked) {
      var str = checkbox.id;
      var packId = str.substring(2, 0);
      if (this.pack[packId].packContent[0].channels) {
        this.previewComponent.addChannel(this.pack[packId].packContent[0].channels);
      }
    } else {
    }
  }

}
