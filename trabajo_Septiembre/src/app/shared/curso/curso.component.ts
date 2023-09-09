import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Curso } from 'src/app/modelos/curso';
import { CursoService } from 'src/app/services/curso.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  standalone:true,
  imports:[IonicModule, HttpClientModule],
  providers : [CursoService]
})
export class CursoComponent  implements OnInit {

listaCursos: Array<Curso> = [];

@Output() enviarListaCurso: EventEmitter <Array<Curso>> = new EventEmitter<Array<Curso>>();
@Input() titulo: string = '';


  constructor(private cursoService:CursoService) { }

  ngOnInit() {}

  consultarElServicio():void{
    this.cursoService.all().subscribe({
     next:(resp)=>{
    this.listaCursos = resp.data;
    this.enviarListaCurso.emit(this.listaCursos);
     },
     error:()=> {
      alert('Error en los cursos');
     }
    });
  }

}
