import { Component, OnInit } from '@angular/core';

import { MatTable, MatPaginator, MatTableDataSource } from '@angular/material';
import { Countries } from '../../mock-data';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'capital'];
  countryList = new MatTableDataSource(Countries);

  constructor() { }

  ngOnInit() {


  }

  applyFilter(filterValue: string) {
    this.countryList.filter = filterValue.trim().toLowerCase();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}
