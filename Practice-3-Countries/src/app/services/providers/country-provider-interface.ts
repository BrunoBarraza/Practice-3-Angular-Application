import { Observable } from 'rxjs';
import { ICountry } from 'src/app/models/country.model';
import { ICountryDetail } from 'src/app/models/country-details.model';

export interface ICountryProviderInterface {
  provideCountryList(): Observable<ICountry[]>;
  provideCountryByName(name: string): Observable<ICountryDetail>;
}
