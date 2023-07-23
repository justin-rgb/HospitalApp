import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


import { HospitalService } from 'src/app/services/hospital.service';
import { MedicoService } from 'src/app/services/medico.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor( private usuarioService: UsuarioService,
               private hospitalService: HospitalService,
               private medicoService: MedicoService ){

    this.usuarioService.cantUsuariosPorRol()
    .subscribe( (resp: any) => {
      const { users, admins } = resp
      this.pieChart( users, admins )

    })

    this.hospitalService.cantHospitalesNombre()
    .subscribe( (resp: any) => {

      const hospA: any = []
      const indexHosp: any = []
      resp.hospitales.map( (hosp: any, i: number) =>{
        hospA.push(hosp.nombre)
        indexHosp.push(i+1)
      })
      this.pieChart2( hospA, indexHosp )
    })


    this.medicoService.cantMedicosNombre()
    .subscribe( (resp: any) => {

      const medicosA: any = []
      const indexMed: any = []
      resp.medicos.map( (med: any, i: number) =>{
        medicosA.push(med.nombre)
        indexMed.push(1)
      })
      this.pieChart3( medicosA, indexMed )

    })



  }


  ngOnInit(): void {

  }

  // CHARTS
  pieChart(  cantUsers: any, cantAdmins: any ){
    var myChart = new Chart('myChart1', {
      type: 'polarArea',
      data: {
        labels: ['Usuarios', 'Administradores'],
        datasets: [
          {
            label: 'Cantidad ',
            data: [cantUsers, cantAdmins],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {

      },
    });
  }

  pieChart2( hospitales: [], cantidades: [] ){
    var myChart = new Chart('myChart2', {
      type: 'pie',
      data: {
        labels: hospitales,
        datasets: [
          {
            label: 'Hospital ',
            data: cantidades,
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {

      },
    });
  }

  pieChart3( medicos: [], cantidades: []  ){
    var myChart = new Chart('myChart3', {
      type: 'doughnut',
      data: {
        labels: medicos,
        datasets: [
          {
            label: 'Medico ',
            data: cantidades,
            backgroundColor: [
              'rgba(255, 206, 86, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {

      },
    });
  }


}
