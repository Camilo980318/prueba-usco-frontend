import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  chartOptions: any;

  dataLine: any[] = [];
  constructor(public _getDataService: GetDataService) { }


  ngOnInit(): void {

    // Asignamos la data del servicio, para que se grafique

    this.chartOptions = {
      series: [
        {
          name: "Promedio Ponderado",
          data: this._getDataService.dataLine
        }
      ],
      chart: {
        height: 350,
        width: 950,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      colors: ['#F44336', '#E91E63', '#9C27B0'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },

      title: {
        text: "Promedio Ponderado del Estudiante",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Semestre 1",
          "Semestre 2",
          "Semestre 3",
          "Semestre 4",
          "Semestre 5",
          "Semestre 6",
          "Semestre 7",
          "Semestre 8",
          "Semestre 9",
          "Semestre 10",
        ]
      }
    };

    this.chart.render()

    console.log(this.chartOptions)
  }


}
