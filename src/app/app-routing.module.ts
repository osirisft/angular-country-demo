import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: CountryListComponent },
  { path: 'detail/:id', component: CountryDetailComponent },
  { path: 'barChart', component: BarChartComponent },
  { path: 'treeList', component: TreeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
