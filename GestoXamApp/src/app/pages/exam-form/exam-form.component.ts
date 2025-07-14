import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AnimateDirective } from '../../shared/directives/animate.directive';
import { CreateExam, Exam } from '../../shared/interfaces/exam.interface';
import { ExamsService } from '../../shared/services/exams.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, AnimateDirective]
})
export class ExamFormComponent implements OnInit, OnDestroy {
  examForm!: FormGroup;
  $subject = new Subject<void>();

  constructor(private fb: FormBuilder, private readonly srvExam: ExamsService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.examForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      status: [''],
      location: [null],
      date: [''],
      time: [''],
      additional_status: ['']
    });
    this.route.queryParams
    .pipe(takeUntil(this.$subject))
    .subscribe(params => {
      const examId = params['id'];
      if (examId) {
        this.getExamById(examId);
      }
    });
  }

  private getExamById(examId: any) {
    this.srvExam.getExamById(examId)
    .pipe(takeUntil(this.$subject))
    .subscribe((exam: Exam) => {
      this.examForm.patchValue({
        name: exam.name,
        status: exam.status,
        location: exam.location,
        date: exam.date,
        time: exam.time,
      });
    });
  }

  submitForm() {
    if (this.examForm.valid) {
      const examId = this.route.snapshot.queryParamMap.get('id');
      if (examId) {
        const exam: Exam = { id: +examId, ...this.examForm.value };
        this.srvExam.updateExam(Number(examId), exam)
        .pipe(takeUntil(this.$subject))
        .subscribe((response) => {
          this.router.navigate(['/exams']);
        });
      } else {
        const exam: CreateExam = this.examForm.value;
        this.srvExam.createExam(exam)
        .pipe(takeUntil(this.$subject))
        .subscribe((response) => {
          this.router.navigate(['/exams']);
        }
        );
      }
    } else {
      this.examForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.$subject.next();
    this.$subject.complete();
  }
}
