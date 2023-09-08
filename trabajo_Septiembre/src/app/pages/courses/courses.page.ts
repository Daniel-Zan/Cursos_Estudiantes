import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompartidosComponent } from 'src/app/shared/compartidos/compartidos.component';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CompartidosComponent]
})
export class CoursesPage implements OnInit {
ListaE:Array<Estudiante> =[];
tituloBoton:string = 'ver la lista de estudiantes';
  constructor() { }

  ngOnInit() {
  }

recibirLista(lista:Array<Estudiante>):void{
this.ListaE = lista;
}

}
