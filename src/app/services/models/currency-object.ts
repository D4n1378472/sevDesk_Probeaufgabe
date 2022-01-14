import { Price } from "./price";

export interface CurrencyObject {
    'EUR': Price;
    'USD': Price;
    'AUD': Price;
    'NZD': Price;
    'GBP': Price;
}