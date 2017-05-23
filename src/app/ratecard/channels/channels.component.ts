import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-channels]',
  templateUrl: 'channels.component.html'
})
export class ChannelsComponent implements OnInit {
  // channel name
  public channel = {
    familyPack: [
      { id: "1", name: "family" }
    ],
    primePack: [
      { id: "1", name: "sports" },
      { id: "2", name: "dynasty" },
      { id: "3", name: "movies" }
    ],
    miniPack: [
      { id: "1", name: "news" },
      { id: "2", name: "kids" },
      { id: "3", name: "learning" },
      { id: "4", name: "variety" }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  public reCalc(e) {

  }

}
