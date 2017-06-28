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

@Injectable()
export class Package {
    constructor(
        public header: boolean,
        public pack: string,
        public id: string,
        public name: string,
        public functionName: string,
        public price: number,
        public always: boolean,
        public channels: Array<any>
    ) { }
}

@Injectable()
export class SharedData {
    mainpacks = [
        {
            id: 'as', name: "Astro Family", pack: [
                new Package(true, 'Astro Family', 'as.0', 'Family', '', 39.95, true,
                    [
                        '101	TV1',
                        '102	TV2',
                        '103	TV3',
                        '104	Astro Ria',
                        '105	Astro Prima',
                        '106	Astro Oasis',
                        '107	NTV 7',
                        '109	TV5 / TVi',
                        '114	TV Al-Hijrah',
                        '118	GO SHOP',
                        '119	TV9',
                        '200	Astro Service Portal',
                        '201	Astro Vaanavil',
                        '202	Astro Vellithirai',
                        '203	Makkal TV',
                        '301	Astro AEC',
                        '303	GO SHOP Mandarin',
                        '304	Kah Lai Toi',
                        '305	TVB Classic',
                        '321	Celestial Classic Movies',
                        '325	Astro Xiao Tai Yang',
                        '334	CCTV4',
                        '391	KBS World',
                        '501	Astro Awani',
                        '502	BNC',
                        '509	CCTV News',
                        '550	Nat Geo Wild',
                        '111	Art',
                        '601	Astro Tutor TV UPSR',
                        '602	Astro Tutor TV PMR',
                        '603	Astro Tutor TV SPM',
                        '610	Astro TVIQ',
                        '611	Astro Ceria',
                        '617	Disney XD',
                        '701	AXN',
                        '702	DIVA',
                        '703	Asian Food Channel',
                        '707	TLC',
                        '708	8TV',
                        '737	Go Asean (cease 12/6)',
                        '801	Astro Arena',
                        '818	FOX Sports 3'
                    ]
                )]
        },
        {
            id: 'pp', name: "Prime Packages", pack: [
                new Package(true, 'Prime Packages', 'pp.0', 'Sport', 'mini_pack', 51, false,
                    [
                        '808	eGG Network',
                        '810	Astro SuperSport',
                        '811	Astro SuperSport 2',
                        '812	FOX Sports',
                        '813	FOX Sports 2',
                        '814	Eurosport',
                        '816	Astro SuperSports 3',
                        '817	Astro SuperSports 4',
                        '818	FOX Sports 3',
                        '837	beIN Sports'
                    ]
                ),
                new Package(false, 'Prime Packages', 'pp.1', 'Dynasty', '', 42, false,
                    [
                        '311	Wah Lai Toi',
                        '312	Phoenix Chinese Channel',
                        '313	TVB Entertainment News',
                        '314	TVB Xing He',
                        '317	TVBS Asia',
                        '324	Astro Shuang Xing',
                        '351 - 363	Astro On Demand',
                        '398	NHK World'
                    ]
                ),
                new Package(false, 'Prime Packages', 'pp.2', 'Movies', '', 32, false,
                    [
                        '411	HBO',
                        '412	Cinemax',
                        '413	Fox Movies Premium'
                    ]
                )]
        },
        {
            id: 'mp', name: "Mini Pack", pack: [
                new Package(true, 'Mini Pack', 'mp.0', 'News', 'mini_pack', 0, false,
                    [
                        '511	CNN',
                        '512	BBC World',
                        '513	Al Jazeera English',
                        '518	CNBC Asia',
                        '519	Bloomberg TV',
                        '521	Australia Plus',
                    ]
                ),
                new Package(false, 'Mini Pack', 'mp.1', 'Kids', 'mini_pack', 0, false,
                    [
                        '612	Nickelodeon',
                        '613	Disney Junior',
                        '615	Disney Channel',
                        '616	Cartoon Network',
                        '619	Zoo Moo'
                    ]
                ),
                new Package(false, 'Mini Pack', 'mp.2', 'Learning', 'mini_pack', 0, false,
                    [
                        '551	Discovery Channel',
                        '553	Nat Geo',
                        '554	Discovery Science',
                        '555	History Channel',
                        '556	Animal Planet',
                    ]
                ),
                new Package(false, 'Mini Pack', 'mp.3', 'Variety', 'mini_pack', 0, false,
                    [
                        '711	Star World',
                        '712	E! Entertainment',
                        '713	MTV',
                        '715	Animax',
                    ]
                )]
        }
    ]
}