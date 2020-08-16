import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public router: Router, public _getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  goToDashboard(form: NgForm) {

    let dataService = [];
    let dataLine = [];
    // Obtenemos el codigo, y lo asignamos  la variable en el service
    this._getDataService.codigoEstudiante = form.value.codigo;

    // Recorremos la info que viene del servicio, y sacamos los valore únicos
    this._getDataService.getDataSemestres().subscribe((resp: any) => {

      for (let i = 0; i < resp.length; i++) {
        dataService.push(resp[i].ponderado);
      }
      let uniqs = dataService.filter(function (item, index, array) {
        return array.indexOf(item) === index;
      })
      for (let i = 0; i < uniqs.length; i++) {
        dataLine.push(uniqs[i])
      }

    });

    this._getDataService.dataLine = dataLine;
    this.router.navigate(['dashboard', form.value.codigo])
  }
}
