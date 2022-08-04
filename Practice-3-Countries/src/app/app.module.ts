import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListPageComponent } from './pages/country-list-page/country-list-page.component';
import { CountryByNamePageComponent } from './pages/country-by-name-page/country-by-name-page.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { TableRowDirective } from './directives/table-row.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountryListPageComponent,
    CountryByNamePageComponent,
    CountriesTableComponent,
    ObjectValuesPipe,
    ArrayToStringPipe,
    FilterByPipe,
    SortPipe,
    PaginationPipe,
    TableRowDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
