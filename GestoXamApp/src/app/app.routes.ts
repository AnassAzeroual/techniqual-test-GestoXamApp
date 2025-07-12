import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'exams', pathMatch: 'full' },
    { path: 'exams', loadComponent: () => import('./pages/exams/exams.component').then(m => m.ExamsComponent) },
    { path: 'new-exam', loadComponent: () => import('./pages/new-exam/new-exam.component').then(m => m.NewExamComponent) },
];
