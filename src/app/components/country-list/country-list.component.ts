import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CountryService } from '../../services/country-service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'capital', 'region', 'nav'];
  countryList: MatTableDataSource<Country>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countryList = new MatTableDataSource<Country>(countries);
      this.countryList.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.countryList.filter = filterValue.trim().toLowerCase();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
