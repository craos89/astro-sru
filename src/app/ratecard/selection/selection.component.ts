import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: '[app-selection]',
  templateUrl: 'selection.component.html'
})

export class SelectionComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public calculatePrice(checkBox: Array<any>) {
    console.log(checkBox);
  }

}
