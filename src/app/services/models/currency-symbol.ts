export type CurrencySymbol = 'EUR' | 'USD' | 'AUD' | 'NZD' | 'GBP';

// export const ALL_CURRENCY_SYMBOLS = [ 'EUR', 'USD', 'AUD', 'NZD', 'GBP'] as const;
// type _CurrencySymbol = typeof ALL_CURRENCY_SYMBOLS; // readonly ['hearts', 'diamonds', 'spades', 'clubs']
// export type CurrencySymbol = _CurrencySymbol[number];  // 'EUR' | 'USD' | 'AUD' | 'NZD' | 'GBP'