import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreateExam, Exam } from '../../shared/interfaces/exam.interface';
import { ExamsService } from '../../shared/services/exams.service';


@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule]
})
export class ExamFormComponent implements OnInit {
  examForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly srvExam: ExamsService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.examForm = this.fb.group({
      name: ['', Validators.required],
      status: [''],
      location: [null],
      date: [''],
      time: [''],
      additional_status: ['']
    });
    this.route.queryParams.subscribe(params => {
      const examId = params['id'];
      if (examId) {
        this.srvExam.getExamById(examId).subscribe((exam: Exam) => {
          this.examForm.patchValue({
            name: exam.name,
            status: exam.status,
            location: exam.location,
            date: exam.date,
            time: exam.time,
          });
        });
      }
    });
  }

  submitForm() {
    if (this.examForm.valid) {
      const examId = this.route.snapshot.queryParamMap.get('id');
      if (examId) {
        const exam: Exam = { id: +examId, ...this.examForm.value };
        this.srvExam.updateExam(Number(examId), exam).subscribe((response) => {
          console.log('Exam updated successfully:', response);
        });
      } else {
        const exam: CreateExam = this.examForm.value;
        this.srvExam.createExam(exam).subscribe((response) => {
          console.log('Exam created successfully:', response);
        }
        );
      }
    }
  }
}
