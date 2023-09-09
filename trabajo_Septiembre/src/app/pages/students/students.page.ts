import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CursoComponent } from 'src/app/shared/curso/curso.component';
import { Curso } from 'src/app/modelos/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CursoComponent]
})
export class StudentsPage implements OnInit {
  
  listaC:Array<Curso> = [];
  tituloBoton: string = 'VER LA LISTA DE ESTUDIANTES';
  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  recibirListaCurso(lista:Array<Curso>):void{
this.listaC = lista;
  }

  navigateToCoursesPage() {
    this.router.navigate(['/courses']);
  }

 
}
 