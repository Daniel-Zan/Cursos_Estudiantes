import { Curso } from "./curso";

export interface CursoResponse {
    nombreCurso: String;
    codigoCurso: number;
    data: Curso[];
}
