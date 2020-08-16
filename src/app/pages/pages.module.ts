import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesModule } from '../services/services.module';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from '../components/line-chart/line-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';



@NgModule({
  declarations: [PagesComponent, MainComponent, DashboardComponent, LineChartComponent, BarChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    PAGES_ROUTES,
    ServicesModule,
    NgApexchartsModule

  ],
  providers: [
    PagesComponent, MainComponent, DashboardComponent, LineChartComponent, BarChartComponent
  ]
})
export class PagesModule { }
