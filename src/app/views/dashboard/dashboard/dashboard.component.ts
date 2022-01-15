import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Title } from '@angular/platform-browser';
import { CurrencyObject } from 'src/app/services/models/currency-object';
import { CurrencySymbol } from 'src/app/services/models/currency-symbol';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // prices!: Observable<Price[]>;
  prices!: Observable<CurrencyObject>;
  shownPrices: CurrencySymbol[] = [ 'EUR', 'USD', 'AUD', 'NZD', 'GBP' ];

  constructor(
    private title: Title,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
    // this.prices = this.dataService.getBitcoinPricesAsArray();
    this.prices = this.dataService.getBitcoinPrices();
  }

}
