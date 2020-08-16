import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts"

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Nota",
          data: [4, 5, 3.6, 4.3, 4.1]
        }
      ],

      chart: {
        type: "bar",
        height: 300,
        width: 400
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false
      },

      xaxis: {
        categories: [
          "Asignatura 1",
          "Asignatura 2",
          "Asignatura 3",
          "Asignatura 4",
          "Asignatura 5",
        ]
      }
    };

  }

  ngOnInit(): void {
  }

}
