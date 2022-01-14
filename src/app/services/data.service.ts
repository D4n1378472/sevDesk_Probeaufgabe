import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CurrencyObject } from './models/currency-object';
import { CurrencySymbol } from './models/currency-symbol';
import { Price } from './models/price';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get the current state of the bitcoin ticker
   * @returns Observable<CurrencyObject>
   */
  getBitcoinPrices() {
    return this.http.get<CurrencyObject>('https://blockchain.info/ticker');
  }

  /**
   * Get the current state of the bitcoin ticker as array
   * @returns Array<Price>
   */
  getBitcoinPricesAsArray() {
    return this.getBitcoinPrices().pipe(map(data => Object.values(data) as Price[]));
  }

  /**
   * Converts a currency to bitcoin
   * @param currencySymbol CurrencySymbol, the symbol of the currency
   * @param value number, the amount of money that shall be convertet
   * @returns number
   */
  convertCurrencyToBitcoin(currencySymbol: CurrencySymbol, value: number) {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=${currencySymbol}&value=${value}`);
  }
}
