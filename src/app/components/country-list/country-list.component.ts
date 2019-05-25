import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { CountryService } from '../../services/country-service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  currentTime: Date;
  displayedColumns: string[] = ['id', 'name', 'time', 'capital', 'region', 'nav'];
  countryList: MatTableDataSource<Country>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.currentTime = new Date();
    this.getCountries();
  }

  refreshChart(): void {

  }

  getCountries(): void {
    this.countryService.getCountries().subscribe(countries => {
      for (let c of countries) {
        c.UTCOffset = (c.timezones && c.timezones.length > 0) ? c.timezones[0] : "";
        c.offsetTime = this.getTimeFromUTCTimeZone(this.currentTime, c.UTCOffset);
      }
      this.countryList = new MatTableDataSource<Country>(countries);
      this.countryList.paginator = this.paginator;
      this.countryList.sortingDataAccessor = (data: Country, sortHeaderId: string) => {
        let objProperty = '';
        switch (sortHeaderId) {
          case 'id':
            objProperty = data.alpha3Code;
            break;
          case 'name':
            objProperty = data.name;
            break;
          case 'time':
            objProperty = data.offsetTime.toString();
            break;
          case 'capital':
            objProperty = data.capital;
            break;
          case 'region':
            objProperty = data.region;
            break;
        }
        return objProperty;
      };
      this.countryList.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.countryList.filter = filterValue.trim().toLowerCase();
  }

  getTimeFromUTCTimeZone(currentLocalTime: Date, UTCOffset: string): number {
    let timeFrom1970 = currentLocalTime.getTime();
    let str = UTCOffset.replace('UTC', '').replace(':', '');
    return parseInt(str) + timeFrom1970;
  }

}
