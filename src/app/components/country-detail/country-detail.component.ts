import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountryService } from '../../services/country-service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country = new Country();

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id').toString();
    this.getCountry(id);
  }

  getCountry(id: string): void {
    this.countryService.getCountry(id).subscribe(country => {
      this.country = country;
    });
  }

}
