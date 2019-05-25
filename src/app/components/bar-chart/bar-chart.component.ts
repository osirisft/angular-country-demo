import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { CountryService } from '../../services/country-service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: ' Top 10 Populated Countries' }
  ];

  public top10PopCountries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getTop10PopCountries();
  }

  getTop10PopCountries() {
    this.countryService.getCountries().subscribe(aCountries => {
      aCountries.sort(function (a, b) {
        return parseInt(a.population) > parseInt(b.population) ? -1 : 1;
      });
      this.top10PopCountries = aCountries.splice(0, 10);
      this.updateBarChartLabel(this.top10PopCountries);
    });
  }

  updateBarChartLabel(countryList: Country[]) {
    this.barChartLabels = [];
    for (let i = 0; i < countryList.length; i++) {
      this.barChartLabels.push(countryList[i].name);
      this.barChartData[0].data.push(parseInt(countryList[i].population));
    }
  }
}
