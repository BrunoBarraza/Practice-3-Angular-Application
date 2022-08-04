import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryByNamePageComponent } from './pages/country-by-name-page/country-by-name-page.component';
import { CountryListPageComponent } from './pages/country-list-page/country-list-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CountryListPageComponent },
  { path: 'country/:name', component: CountryByNamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
