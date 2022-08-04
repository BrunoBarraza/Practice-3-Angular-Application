import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/models/country.model';
import { ICountryDetail } from 'src/app/models/countryDetails.model';
import { environment } from 'src/environments/environment';
import { ICountryProviderInterface } from './country-provider-interface';

@Injectable({
  providedIn: 'root',
})
export class CountryProviderService implements ICountryProviderInterface {
  constructor(private http: HttpClient) {}

  provideCountryList(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.endpoints.COUNTRIES_LIST_URL);
  }
  provideCountryByName(name: string): Observable<ICountryDetail> {
    throw new Error('Method not implemented.');
  }
}
