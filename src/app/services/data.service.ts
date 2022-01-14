import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CurrencyObject } from './models/currency-object';
import { Price } from './models/price';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getBitcoinPrices() {
    return this.http.get<CurrencyObject>('https://blockchain.info/ticker');
  }

  getBitcoinPricesAsArray() {
    return this.getBitcoinPrices().pipe(map(data => Object.values(data) as Price[]));
  }
}
