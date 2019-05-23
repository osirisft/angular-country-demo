import { Currency } from './currency';

export class Country {
    alpha3Code: string;
    name: string;
    capital: string;
    currencies: Currency[];
    region: string;
    flag: string;
    area: number;
    population: string;
    nativeName: string;
    UTCOffset: string;
    timezones: string[];
    offsetTime: number;

}