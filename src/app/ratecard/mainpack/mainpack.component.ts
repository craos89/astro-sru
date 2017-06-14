import { Component, OnInit, Injectable, EventEmitter, Input, Output } from '@angular/core';
import { PreviewComponent } from '../preview/preview.component';
import { SelectionComponent } from '../selection/selection.component';
import { Package } from './mainpack';

@Component({
  selector: '[app-mainpack]',
  templateUrl: 'mainpack.component.html',
  styleUrls: ['../../../assets/css/checkbox.scss', '../../../assets/css/mainpack.scss']
})

export class MainpackComponent implements OnInit {
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

  public allPackIdCalculate = [];

  private modalDivPrefix = 'modal.';

  public mainpacks = [
    {
      id: 'as', name: "Astro Family", pack: [
        new Package(true, 'Astro Family', 'as.0', 'Family', '', 39.95, true)]
    },
    {
      id: 'pp', name: "Prime Packages", pack: [
        new Package(true, 'Prime Packages', 'pp.0', 'Sport', 'mini_pack', 51, false),
        new Package(false, 'Prime Packages', 'pp.1', 'Dynasty', '', 42, false),
        new Package(false, 'Prime Packages', 'pp.2', 'Movies', '', 32, false)]
    },
    {
      id: 'mp', name: "Mini Pack", pack: [
        new Package(true, 'Mini Pack', 'mp.0', 'News', 'mini_pack', 0, false),
        new Package(false, 'Mini Pack', 'mp.1', 'Kids', 'mini_pack', 0, false),
        new Package(false, 'Mini Pack', 'mp.2', 'Learning', 'mini_pack', 0, false),
        new Package(false, 'Mini Pack', 'mp.3', 'Variety', 'mini_pack', 0, false)]
    }
  ]

  constructor(
    private previewComponent: PreviewComponent,
    private selectionComponent: SelectionComponent
  ) { }

  ngOnInit(): void {
    this.reCalc('as.0', 'add');
  }

  ngAfterViewInit() {
    this.previewComponent.addChannel('as.0');
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

              this.reCalc(pack.id, 'add');

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

              this.reCalc(pack.id, 'remove');

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

      if (noChecked == 0) {
        (<HTMLInputElement>document.getElementById('pp.0')).checked = false;
        this.previewComponent.removeChannel('pp.0');
        this.reCalc('pp.0', 'remove');
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

      if (noChecked < 2) {
        for (let mainpack of this.mainpacks) {
          if (mainpack.id == "mp") {
            // need to have at least 1 checked then PASS
            for (let pack of mainpack.pack) {
              (<HTMLInputElement>document.getElementById(pack.id)).checked = false;
              (<HTMLInputElement>document.getElementById(this.modalDivPrefix + pack.id)).checked = false;
              this.previewComponent.removeChannel(pack.id);
              this.reCalc(pack.id, 'remove');
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
              this.reCalc(checkboxId, 'add')
            }
          }
        }
      }
    }
    else {
      (<HTMLInputElement>document.getElementById(checkboxId)).checked = false;
      (<HTMLInputElement>document.getElementById(this.modalDivPrefix + checkboxId)).checked = false;
      this.previewComponent.removeChannel(checkboxId);
      this.reCalc(checkboxId, 'remove');
    }
  }

  private checkifExist(elementId: string) {
    let element = document.getElementById(elementId);
    if (typeof (element) === 'undefined' || element === null) {
      return false;
    }
    else {
      return true;
    }
  }

  private removeItem(array, item) {
    for (var i in array) {
      if (array[i] == item) {
        array.splice(i, 1);
        break;
      }
    }
  }

  private reCalc(checkboxId: string, operation: string) {
    if (operation == 'add') {
      this.allPackIdCalculate.push(checkboxId);
    }
    else if (operation == 'remove') {
      this.removeItem(this.allPackIdCalculate, checkboxId)
    }

    let calculationResult = this.calcBusinessRule();
    let price = calculationResult[0];
    let priceTrail = calculationResult[1];

    console.log(price);
    console.log(priceTrail);
    this.selectionComponent.calculatePrice(price, priceTrail)
  }

  private calcBusinessRule() {
    let result = [];
    let price: number = 0;
    let priceTrail: string = '';

    if (this.contains(this.allPackIdCalculate, 'as.0')) {
      price += 39.95;
      priceTrail += "39.95 | ";

      if (this.contains(this.allPackIdCalculate, 'pp.0')) {
        // check how many Mini Packs
        if (this.countMiniPack() == 1) {
          price += 51;
          priceTrail += "51 | ";
        }
        else if (this.countMiniPack() == 2) {
          price += 51 + 8;
          priceTrail += "51 + 8 | ";
        }
        else if (this.countMiniPack() == 3) {
          price += 51 + 8 + 5;
          priceTrail += "51 + 8 + 5 | ";
        }
        else if (this.countMiniPack() == 4) {
          price += 51 + 8 + 5 + 5;
          priceTrail += "51 + 8 + 5 + 5 | ";
        }

        if (this.contains(this.allPackIdCalculate, 'pp.1') && this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 20
          price += 32
          priceTrail += "20 + 32 | ";
        }
        else if (!this.contains(this.allPackIdCalculate, 'pp.1') && this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 30
          priceTrail += "30 | ";
        }
        else if (this.contains(this.allPackIdCalculate, 'pp.1') && !this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 40
          priceTrail += "40 | ";
        }
      }

      if (!this.contains(this.allPackIdCalculate, 'pp.0')) {
        if (this.countMiniPack() == 2) {
          price += 18;
          priceTrail += "18 | ";
        }
        else if (this.countMiniPack() == 3) {
          price += 18 + 5;
          priceTrail += "18 + 5 | ";
        }
        else if (this.countMiniPack() == 4) {
          price += 18 + 5 + 5;
          priceTrail += "18 + 5 + 5 | ";
        }

        if (this.contains(this.allPackIdCalculate, 'pp.1') && this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 20
          price += 32
          priceTrail += "20 + 32 | ";
        }
        else if (!this.contains(this.allPackIdCalculate, 'pp.1') && this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 32
          priceTrail += "32 | ";
        }
        else if (this.contains(this.allPackIdCalculate, 'pp.1') && !this.contains(this.allPackIdCalculate, 'pp.2')) {
          price += 42
          priceTrail += "42 | ";
        }
      }

    }

    result.push(price);
    result.push(priceTrail)
    return result;
  }

  private countMiniPack(): number {
    let count = 0;
    let minipacks = [];

    for (let mainpack of this.mainpacks) {
      if (mainpack.id == 'mp') {
        for (let minipack of mainpack.pack) {
          if (this.contains(this.allPackIdCalculate, minipack.id)) {
            count++;
          }
        }
      }
    }

    return count;
  }

  private contains(a, obj) {
    var i = a.length;
    while (i--) {
      if (a[i] === obj) {
        return true;
      }
    }
    return false;
  }

}
