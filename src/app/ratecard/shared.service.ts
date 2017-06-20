import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class SharedService {
    priceData = {
        price: 0,
        priceTrail: '',
        showSuggestion: false,
    };

    shoppingCart = {
        price: '',        
        gst: '',
        totalPrice: '',
        totalPriceAfterRounding: '',
        cartSummary: [],
    };

    insertPriceData(price: number, priceTrail: string) {
        this.priceData.price = price;
        this.priceData.priceTrail = priceTrail;
    }
}