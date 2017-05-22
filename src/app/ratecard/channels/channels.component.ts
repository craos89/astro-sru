import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: 'channels.component.html'
})
export class ChannelsComponent implements OnInit {
  public channelName = {
    familyPack: "familyPack",
    sports: "sports",
    movies: "movies"
  };

  constructor() { }

  ngOnInit(): void {
  }

  public addProp(e, channel) {
    if (e.target.checked) {
      console.log(e.target.checked + ': ' + channel);
    }
    else{
      console.log(e.target.checked + ': ' + channel);
    }
  }

}
