import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompartidosComponent } from 'src/app/shared/compartidos/compartidos.component';
import { Estudiante } from 'src/app/models/estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CompartidosComponent]
})
export class CoursesPage implements OnInit {
  ListaE: Array<Estudiante> = [];
  filteredLista: Array<Estudiante> = [];
  tituloBoton: string = 'VER LA LISTA DE CURSOS';

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.ListaE = [
      // INSERTE LISTA DE CURSOS
    ];
    
    this.filteredLista = this.ListaE;
  } 

  recibirLista(lista: Array<Estudiante>): void {
    this.ListaE = lista;
  }

  navigateToStudentsPage() {
    this.router.navigate(['/students']);
  }

  onSearch(event: Event) {
    const searchTerm = (event as CustomEvent).detail.value.toLowerCase();
  
    if (searchTerm.trim() === '') {
    
      this.filteredLista = this.ListaE;
    } else {
 
      this.filteredLista = this.ListaE.filter(curso =>
        curso.nombre.toLowerCase().includes(searchTerm)
      );
    }
  }
  
}
