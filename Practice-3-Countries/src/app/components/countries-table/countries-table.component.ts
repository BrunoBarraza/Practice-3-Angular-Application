import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IMappedCountry } from 'src/app/models/mapped-country.model';
import { TSort } from 'src/app/pipes/sort.pipe';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss'],
})
export class CountriesTableComponent {
  public searchBy: FormControl = new FormControl('');
  public searchTarget: FormControl = new FormControl('');
  public sortType: TSort = 'ASC';
  public itemsPerPage: number = 25;
  public limits: [init: number, limit: number] = [0, this.itemsPerPage];
  public currentIndex: number = 0;

  @Input() countryList: Array<IMappedCountry> = [];

  public switchSort() {
    this.sortType = this.sortType === 'ASC' ? 'DESC' : 'ASC';
  }

  public paginate(index: number) {
    const initialValue: number = index * this.itemsPerPage;
    const lastValue: number = initialValue + (this.itemsPerPage - 1);
    this.currentIndex = index;
    this.limits = [
      initialValue,
      lastValue > this.countryList.length - 1
        ? this.countryList.length - 1
        : lastValue,
    ];
  }

  
}
