import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ICountryDetail } from 'src/app/models/country-details.model';
import { CountryProviderService } from 'src/app/services/providers/country-provider.service';

@Component({
  selector: 'app-country-by-name-page',
  templateUrl: './country-by-name-page.component.html',
  styleUrls: ['./country-by-name-page.component.scss'],
})
export class CountryByNamePageComponent implements OnInit {
  public countryDetail$!: Observable<ICountryDetail>;
  constructor(
    private dataProvider: CountryProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryDetail$ = this.route.params.pipe(
      map((params) => params['name'] as string),
      switchMap((name: string) => this.dataProvider.provideCountryByName(name))
    );
  }
}
