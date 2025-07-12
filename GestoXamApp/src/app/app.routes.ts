import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'exams', pathMatch: 'full' },
    { path: 'exams', loadComponent: () => import('./pages/exams/exams.component').then(m => m.ExamsComponent) },
    { path: 'exam-form', loadComponent: () => import('./pages/exam-form/exam-form.component').then(m => m.ExamFormComponent) }
];
