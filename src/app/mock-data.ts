import { Country } from './models/country';
import { Currency } from './models/currency';

export const Currencies: Currency[] = [
    { code: 'AB', name: 'AAAA', symbol: '1' },
    { code: 'BB', name: 'BBBB', symbol: '2' },
]

export const Countries: Country[] = [
    { id: 1, name: 'Country 1', capital: 'capital 1', currency: Currencies[0] },
    { id: 2, name: 'Country 2', capital: 'capital 2', currency: Currencies[1] }
];