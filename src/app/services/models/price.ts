import { CurrencySymbol } from "./currency-symbol";

export interface Price {
    '15m': number;
    buy: number;
    last: number;
    sell: number;
    symbol: CurrencySymbol;
}