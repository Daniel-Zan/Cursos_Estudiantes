import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses.page').then( m => m.CoursesPage)
  },
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.page').then( m => m.StudentsPage)
  },

];
