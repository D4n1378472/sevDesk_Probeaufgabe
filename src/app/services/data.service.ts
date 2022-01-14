import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, merge } from 'rxjs';
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
    return combineLatest([
      this.http.get<number>(`${this._baseUrl}q/marketcap`),
      this.http.get<number>(`${this._baseUrl}q/totalbc`),
      this.http.get<number>(`${this._baseUrl}q/24hrtransactioncount`),
      this.http.get<number>(`${this._baseUrl}q/24hrbtcsent`),
      this.http.get<number>(`${this._baseUrl}q/hashrate`),
      this.http.get<number>(`${this._baseUrl}q/getdifficulty`)
    ]).pipe(
      map(data => ({
        marketcap: data[0],
        totalbc: data[1],
        '24hrtransactioncount': data[2],
        '24hrbtcsent': data[3] / 100000000, // divide by 100000000 to convert from satoshi to bitcoin
        hashrate: data[4],
        getdifficulty: data[5],
      } as Details))
    );
  }
}
