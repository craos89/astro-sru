import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { SelectionComponent } from '../selection/selection.component';
import { Package } from './packages';

@Component({
  selector: '[app-packages]',
  templateUrl: 'packages.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/packages.scss']
})

export class PackagesComponent implements OnInit {
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    this.checkMiniPackCheckbox()
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  private modalDivPrefix = 'modal.';

  public mainpacks = [
    {
      id: 'as', name: "Astro Family", pack: [
        new Package(true, 'Astro Family', 'as.0', 'Family', '')]
    },
    {
      id: 'pp', name: "Prime Packages", pack: [
        new Package(true, 'Prime Packages', 'pp.0', 'Sport', 'mini_pack'),
        new Package(false, 'Prime Packages', 'pp.1', 'Dynasty', ''),
        new Package(false, 'Prime Packages', 'pp.2', 'Movies', '')]
    },
    {
      id: 'mp', name: "Mini Pack", pack: [
        new Package(true, 'Mini Pack', 'mp.0', 'News', 'mini_pack'),
        new Package(false, 'Mini Pack', 'mp.1', 'Kids', 'mini_pack'),
        new Package(false, 'Mini Pack', 'mp.2', 'Learning', 'mini_pack'),
        new Package(false, 'Mini Pack', 'mp.3', 'Variety', 'mini_pack'),]
    }
  ]

  /*// pack JSON
  public pack = {
    as: { // must be unique
      packName: "Astro Family", packContent: [
        { id: "as.0", name: "Family", price: '10' }
      ]
    },
    pp: {
      packName: "Prime Packages", packContent: [
        { id: "pp.0", name: "Sport", channels: ["channel_1", "channel_2", "channel_3"], price: '10' },
        { id: "pp.1", name: "Dynasty", channels: ["channel_4", "channel_5", "channel_6"], price: '10' },
        { id: "pp.2", name: "Movies", channels: ["channel_7", "channel_8", "channel_9"], price: '10' }
      ]
    },
    mp: {
      packName: "Mini Pack", packContent: [
        { id: "mp.0", name: "News" },
        { id: "mp.1", name: "Kids" },
        { id: "mp.2", name: "Learning" },
        { id: "mp.3", name: "Variety" }
      ]
    }
  };*/

  constructor(
    private previewComponent: PreviewComponent,
    private selectionComponent: SelectionComponent
  ) { }

  ngOnInit(): void {
  }

  public reChecked(e) {
    let checkbox = e.target;
    let checkboxId = checkbox.id;
    let packId = checkboxId.substring(2, 0);
    let packContent = checkboxId.substring(3);

    if (checkbox.checked) {
      for (let mainpack of this.mainpacks) {
        if (mainpack.id == packId) {
          for (let pack of mainpack.pack) {
            if (pack.id == checkboxId) {
              if (pack.functionName !== '') {
                this.checkBusinessRule(pack.functionName);
                (<HTMLInputElement>document.getElementById(checkboxId)).checked = true;
                if (this.checkifExist(this.modalDivPrefix + checkboxId)) {
                  (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = true;
                }
                this.previewComponent.addChannel(checkboxId);
              }
              else {
                (<HTMLInputElement>document.getElementById(checkboxId)).checked = true;
                if (this.checkifExist(this.modalDivPrefix + checkboxId)) {
                  (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = true;
                }
                this.previewComponent.addChannel(checkboxId);
              }
            }
          }
        }
      }
    }
    else {
      for (let mainpack of this.mainpacks) {
        if (mainpack.id == packId) {
          for (let pack of mainpack.pack) {
            if (pack.id == checkboxId) {
              if (pack.functionName !== '') {
                this.checkBusinessRule(pack.functionName);
                (<HTMLInputElement>document.getElementById(checkboxId)).checked = false;
                if (this.checkifExist(this.modalDivPrefix + checkboxId)) {
                  (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = false;
                }
                this.previewComponent.removeChannel(checkboxId);
              }
              else {
                (<HTMLInputElement>document.getElementById(checkboxId)).checked = false;
                if (this.checkifExist(this.modalDivPrefix + checkboxId)) {
                  (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = false;
                }
                this.previewComponent.removeChannel(checkboxId);
              }
            }
          }
        }
      }
    }
  }

  private checkBusinessRule(functionName: string) {
    if (functionName === 'mini_pack') {
      this.miniPack();
    }

  }

  private miniPack() {
    let noChecked: number;
    noChecked = 0;
    console.log((<HTMLInputElement>document.getElementById('pp.0')).checked);
    if ((<HTMLInputElement>document.getElementById('pp.0')).checked) {

      for (let mainpack of this.mainpacks) {
        if (mainpack.id == "mp") {
          // need to have at least 1 checked then PASS
          for (let pack of mainpack.pack) {
            if ((<HTMLInputElement>document.getElementById(pack.id)).checked) {
              noChecked++;
              continue;
            }
          }
        }
      }
      console.log(noChecked);
      if (noChecked == 0) {
        document.getElementById("modalHeader").innerHTML = "Please choose at least <span style='color:red; font-weight: bold;'>1 mini pack</span>";
        this.show()
      }
    }
    else if (!(<HTMLInputElement>document.getElementById('pp.0')).checked) {
      for (let mainpack of this.mainpacks) {
        if (mainpack.id == "mp") {
          // need to have at least 1 checked then PASS
          for (let pack of mainpack.pack) {
            if ((<HTMLInputElement>document.getElementById(pack.id)).checked) {
              noChecked++;
              continue;
            }
          }
        }
      }
      console.log(noChecked);
      if (noChecked < 2) {
        document.getElementById("modalHeader").innerHTML = "Please choose at least <span style='color:red; font-weight: bold;'>2 mini pack</span>";
        this.show()
      }
    }
  }

  private checkMiniPackCheckbox() {
    let noChecked: number;
    noChecked = 0;
    if ((<HTMLInputElement>document.getElementById('pp.0')).checked) {

      for (let mainpack of this.mainpacks) {
        if (mainpack.id == "mp") {
          // need to have at least 1 checked then PASS
          for (let pack of mainpack.pack) {
            if ((<HTMLInputElement>document.getElementById(pack.id)).checked) {
              noChecked++;
              continue;
            }
          }
        }
      }
      console.log(noChecked);
      if (noChecked == 0) {
        (<HTMLInputElement>document.getElementById('pp.0')).checked = false;
        this.previewComponent.removeChannel('pp.0');
      }
    }
    else if (!(<HTMLInputElement>document.getElementById('pp.0')).checked) {
      for (let mainpack of this.mainpacks) {
        if (mainpack.id == "mp") {
          // need to have at least 1 checked then PASS
          for (let pack of mainpack.pack) {
            if ((<HTMLInputElement>document.getElementById(pack.id)).checked) {
              noChecked++;
              continue;
            }
          }
        }
      }
      console.log(noChecked);
      if (noChecked < 2) {
        for (let mainpack of this.mainpacks) {
          if (mainpack.id == "mp") {
            // need to have at least 1 checked then PASS
            for (let pack of mainpack.pack) {
              (<HTMLInputElement>document.getElementById(pack.id)).checked = false;
              (<HTMLInputElement>document.getElementById(this.modalDivPrefix + pack.id)).checked = false;
              this.previewComponent.removeChannel(pack.id);
            }
          }
        }
      }
    }
  }

  private reCheckedModal(e) {
    let checkbox = e.target;
    let checkboxId = checkbox.id;
    checkboxId = checkboxId.substring(this.modalDivPrefix.length);
    // console.log(checkboxId);
    let packId = checkboxId.substring(2, 0);
    let packContent = checkboxId.substring(3);

    if (checkbox.checked) {
      for (let mainpack of this.mainpacks) {
        if (mainpack.id == packId) {
          for (let pack of mainpack.pack) {
            if (pack.id == checkboxId) {
              (<HTMLInputElement>document.getElementById(checkboxId)).checked = true;
              (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = true;
              this.previewComponent.addChannel(checkboxId);
            }
          }
        }
      }
    }
    else {
      (<HTMLInputElement>document.getElementById(checkboxId)).checked = false;
      (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = false;
      this.previewComponent.removeChannel(checkboxId);
    }
  }

  private checkifExist(elementId: string) {
    let element = document.getElementById(elementId);

    if (typeof (element) === 'undefined' || element === null) {
      // not exists.
      // console.log('checkifExist not exists: ' + elementId);
      return false;
    }
    else {
      // console.log('checkifExist exists: ' + elementId);
      return true;
    }

  }

  /*public reCalc(e) {
    let checkbox = e.target;
    let checkboxId = checkbox.id;
    let packId = checkboxId.substring(2, 0);
    let packContent = checkboxId.substring(3);
    // console.log(packContent);

    if (checkbox.checked) {
      if (this.pack[packId].packContent[packContent].channels) {
        this.previewComponent.addChannel(checkboxId, this.pack[packId].packContent[packContent].channels);
      }
    }
    else {
      this.previewComponent.removeChannel(checkboxId);
    }

    this.selectionComponent.calculatePrice(this.checkAllCheckBox());
  }

  public checkAllCheckBox(): Array<any> {
    let checkedCB = [];
    let channelsComponent = document.getElementById("channelsComponent");
    let allCheckBox = channelsComponent.getElementsByTagName("input");
    for (let i = 0; i < allCheckBox.length; i++) {
      // console.log({ "id": allCheckBox[i].id, "selected": allCheckBox[i].checked });
      if (allCheckBox[i].checked) {
        checkedCB.push({ "id": allCheckBox[i].id, "selected": allCheckBox[i].checked });
      }
    }

    return checkedCB;
  }*/
}
