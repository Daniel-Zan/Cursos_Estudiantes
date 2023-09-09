import { Estudiante } from "./estudiante";

export interface EstudianteResponse {
    code: number;
    mensaje: string;
    data: Estudiante[];
}
 