import { getCurrencySymbol, getLocaleCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CurrencySymbol } from 'src/app/services/models/currency-symbol';
import { TitleService } from 'src/app/services/title.service';

@Component({
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  currencies: {text: string, symbol: any}[];

  selectedCurrency: string = 'EUR';
  quantity = 0;
  bitcoins = 0;

  constructor(
    private title: TitleService,
    private dataService: DataService
  ) {
    // this.currencies = ALL_CURRENCY_SYMBOLS.map(s => s);
    this.currencies = ['EUR', 'USD', 'AUD', 'NZD', 'GBP'].map(sym => ({text: sym, symbol: getCurrencySymbol(sym, 'wide')}));
  }

  ngOnInit(): void {
    this.title.setTitle('Bitcoin Umrechner');
  }

  calculate() {
    this.dataService.convertCurrencyToBitcoin(this.selectedCurrency as CurrencySymbol, this.quantity).subscribe(data => {
      this.bitcoins = data;
    });
  }

}
