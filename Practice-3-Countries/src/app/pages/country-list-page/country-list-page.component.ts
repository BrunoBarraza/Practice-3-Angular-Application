import { Component, OnInit } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { ICountry } from 'src/app/models/country.model';
import { IMappedCountry } from 'src/app/models/mapped-country.model';
import { CountryProviderService } from 'src/app/services/providers/country-provider.service';
import { Mappers } from 'src/app/utility-classes/mappers';

@Component({
  selector: 'app-country-list-page',
  templateUrl: './country-list-page.component.html',
  styleUrls: ['./country-list-page.component.scss'],
})
export class CountryListPageComponent implements OnInit {
  public countryList$!: Observable<IMappedCountry[]>;
  constructor(private dataProvider: CountryProviderService) {}

  ngOnInit(): void {
    this.countryList$ = this.dataProvider
      .provideCountryList()
      .pipe(
        map((countryList) =>
          countryList.map((country) => Mappers.mapDataToTable(country))
        )
      );
  }
}
