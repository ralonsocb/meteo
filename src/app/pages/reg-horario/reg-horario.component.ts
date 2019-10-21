import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { RegistroDiario } from '../../models/registroDiario.model';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';


@Component({
  selector: 'app-reg-horario',
  templateUrl: './reg-horario.component.html',
 // template:'<ejs-schedule></ejs-schedule>',
  styles: [],
})
export class RegHorarioComponent implements OnInit {

  usuario: Usuario;
  registrosHorarios: RegistroDiario[];

  title = "Registro Horario";
  columnNames = ['Fecha', 'Inicio', 'Fin'];

  myData = [];
  type: string = 'Timeline';

  myOptions={
    is3D:true,
    chartArea:{
      left: 40,
      width: 1050,
      height: 1500 
    },
    width:1500,

    height: 1500,
    timeline: { singleColor: '#73BA57'}
  };

 
 

  constructor( private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
    this.registrosHorarios = this.usuario.registrosHorarios;
    this.registrosHorarios.forEach(registro => {
      console.log(registro.fechaInicio);
      console.log(this.getDate(registro.fechaInicio));
      this.myData.push([this.getDate(registro.fechaInicio),
                       new Date(0, 0, 0, this.getHora(registro.fechaInicio),
                                         this.getMinutos(registro.fechaInicio),
                                         this.getSegundos(registro.fechaInicio)),
                       new Date(0, 0, 0, this.getHora(registro.fechaFin),
                                         this.getMinutos(registro.fechaFin),
                                         this.getSegundos(registro.fechaFin))]
      );
    });
  }

  ngOnInit() {
  }

  getDate(date: string): string {
    const dia = date.substring(0,2);
    const mes = date.substring(4,6);
    const año = date.substring(8,12);
    const fecha = dia + '/' + mes + '/' + año;
    return fecha;
   }

   getHora(date: string): number {
    const hora = date.substring(14, 16);
    return +hora;
   }

   getMinutos(date: string): number {
    const minutos = date.substring(17, 19);
    return +minutos;
   }

   getSegundos(date: string): number {
    const segundos = date.substring(20, 22);
    return +segundos;
   }

}






