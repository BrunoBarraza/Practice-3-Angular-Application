import { Component, Input, OnInit } from '@angular/core';
import { IMappedCountry } from 'src/app/models/mapped-country.model';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss'],
})
export class CountriesTableComponent implements OnInit {
  @Input() countryList: Array<IMappedCountry> = [];

  constructor() {}

  ngOnInit(): void {}
}
