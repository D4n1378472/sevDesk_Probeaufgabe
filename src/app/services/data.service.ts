import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { CurrencyObject } from './models/currency-object';
import { CurrencySymbol } from './models/currency-symbol';
import { Details } from './models/details';
import { Price } from './models/price';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _baseUrl = 'https://blockchain.info/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get the current state of the bitcoin ticker
   * @returns Observable<CurrencyObject>
   */
  getBitcoinPrices() {
    return this.http.get<CurrencyObject>(`${this._baseUrl}ticker`);
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
    return this.http.get<number>(`${this._baseUrl}tobtc?currency=${currencySymbol}&value=${value}`);
  }

  /**
   * Get detail informations of bitcoin
   * @returns Observable<Details>
   */
  getDetails() {
    return forkJoin({
      marketcap: this.http.get<number>(`${this._baseUrl}q/marketcap`),
      totalbc: this.http.get<number>(`${this._baseUrl}q/totalbc`),
      '24hrtransactioncount': this.http.get<number>(`${this._baseUrl}q/24hrtransactioncount`),
      '24hrbtcsent': this.http.get<number>(`${this._baseUrl}q/24hrbtcsent`),
      hashrate: this.http.get<number>(`${this._baseUrl}q/hashrate`),
      getdifficulty: this.http.get<number>(`${this._baseUrl}q/getdifficulty`)
    }) as Observable<Details>;
  }
}
