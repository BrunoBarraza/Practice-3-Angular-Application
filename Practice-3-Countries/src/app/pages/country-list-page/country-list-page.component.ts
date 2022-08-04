import { Component, OnInit } from '@angular/core';
import { CountryProviderService } from 'src/app/services/providers/country-provider.service';

@Component({
  selector: 'app-country-list-page',
  templateUrl: './country-list-page.component.html',
  styleUrls: ['./country-list-page.component.scss'],
})
export class CountryListPageComponent implements OnInit {
  constructor(private dataProvider: CountryProviderService) {}

  ngOnInit(): void {
    this.dataProvider.provideCountryList().subscribe(console.log);
  }
}
