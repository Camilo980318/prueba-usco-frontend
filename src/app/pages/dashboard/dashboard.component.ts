import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  codigo: String;
  dataEstudiante: any;

  constructor(public _getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataEstudiante()
  }

  getDataEstudiante() {

    // Asignamos la data del estudiante que viene del servicio a dataEstudiante
    this.codigo = this._getDataService.codigoEstudiante;
    this._getDataService.getDataEstudiante(this.codigo).subscribe((resp: any) => {
      this.dataEstudiante = resp.estudiante;
    });
  }
}
