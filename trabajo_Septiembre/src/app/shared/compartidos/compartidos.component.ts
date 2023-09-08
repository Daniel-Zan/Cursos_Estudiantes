import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import {HttpClientModule} from '@angular/common/http'


@Component({
  selector: 'app-compartidos',
  templateUrl: './compartidos.component.html',
  styleUrls: ['./compartidos.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
  providers : [EstudianteService]
})
export class CompartidosComponent  implements OnInit {

ListaEstudiantes: Array<Estudiante> = [];
@Input() titulo:string= '';
@Output() enviarLista:EventEmitter<Array<Estudiante>>=new EventEmitter<Array<Estudiante>>();



  constructor(private estudianteService:EstudianteService) { }

  ngOnInit() {}

  consultService(): void {
this.estudianteService.all().subscribe({
  next:(resp)=>{
this.ListaEstudiantes = resp.data;
this.enviarLista.emit(this.ListaEstudiantes);
  },
  error:()=> {
    alert('Error en el servicio');
  }
});
  }

}
