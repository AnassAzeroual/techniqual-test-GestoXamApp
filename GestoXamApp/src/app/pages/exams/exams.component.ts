
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Exam } from '../../shared/interfaces/exam.interface';
import { ExamsService } from '../../shared/services/exams.service';
import { AnimateDirective } from '../../shared/directives/animate.directive';
import { StatusBorderDirective } from '../../shared/directives/status-border.directive';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
  standalone: true,
  imports: [RouterLink, AnimateDirective, StatusBorderDirective]
})
export class ExamsComponent implements OnInit {
  examsData: Exam[] = [];
  showDeleteModal = false;
  examToDelete: Exam | null = null;
  currentLayout: 'list' | 'grid' = 'list'; // Default to list layout
  deletingItemId: number | null = null; // Track which item is being deleted

  constructor(private readonly srvExams: ExamsService) { }

  ngOnInit() {
    this.srvExams.getExams().subscribe(
      (data: Exam[]) => {
        this.examsData = data;
      }
    );
  }

  openDeleteModal(exam: Exam) {
    this.examToDelete = exam;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.examToDelete = null;
    this.showDeleteModal = false;
  }

  confirmDeleteExam() {
    this.deletingItemId = this.examToDelete?.id || null;
    this.closeDeleteModal();
    if (!this.deletingItemId) return;
      
      setTimeout(() => {
        this.srvExams.deleteExam(Number(this.deletingItemId)).subscribe(() => {
          this.examsData = this.examsData.filter(e => e.id !== this.deletingItemId);
          this.deletingItemId = null;
          this.examToDelete = null;
        });
      }, 600);
  }

  switchLayout(layout: 'list' | 'grid') {
    this.currentLayout = layout;
  }
}
