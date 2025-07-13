
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Exam } from '../../shared/interfaces/exam.interface';
import { ExamsService } from '../../shared/services/exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class ExamsComponent implements OnInit {
  examsData: Exam[] = [];
  showDeleteModal = false;
  examToDelete: Exam | null = null;

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
    if (this.examToDelete && this.examToDelete.id) {
      this.srvExams.deleteExam(this.examToDelete.id).subscribe(() => {
        this.examsData = this.examsData.filter(e => e.id !== this.examToDelete?.id);
        this.closeDeleteModal();
      });
    }
  }
}
