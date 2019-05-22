import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message-service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CountryService {

    private countryListUrl = 'https://restcountries.eu/rest/v2/all';
    private countryDetailUrl = 'https://restcountries.eu/rest/v2/alpha/';

    constructor(private http: HttpClient,
        private messageService: MessageService) { }

    public getCountries(): Observable<Country[]> {
        this.messageService.add('ConuntryService: fetched country list');
        return this.http.get<Country[]>(this.countryListUrl);
    }

    public getCountry(id: string): Observable<Country> {
        this.messageService.add('ConuntryService: fetched country ');
        return this.http.get<Country>(this.countryDetailUrl + id);
    }

    private log(message: string) {
        this.messageService.add(`CountryService: ${message}`);
    }

}