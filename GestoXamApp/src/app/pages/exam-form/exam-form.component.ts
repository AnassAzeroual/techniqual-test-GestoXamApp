import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Exam } from '../../shared/interfaces/exam.interface';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule]
})
export class ExamFormComponent implements OnInit {
  examForm!: FormGroup;
  get exams(): FormArray {
    return this.examForm.get('exams') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.examForm = this.fb.group({
      exams: this.fb.array([
        this.createExamGroup()
      ])
    });
  }

  createExamGroup(data?: Partial<Exam>): FormGroup {
    return this.fb.group({
      name: [data?.name || '', Validators.required],
      status: [data?.status || '', Validators.required],
      location: [data?.location || null],
      date: [data?.date || '', Validators.required],
      time: [data?.time || '', Validators.required],
      additional_status: [data?.additional_status || '', Validators.required]
    });
  }

  addExam() {
    this.exams.push(this.createExamGroup());
  }

  removeExam(index: number) {
    if (this.exams.length > 1) {
      this.exams.removeAt(index);
    }
  }

  submitForm() {
    if (this.examForm.valid) {
      const exams: Exam[] = this.examForm.value.exams;
      // TODO: Call service to save exams
      console.log('Submitted exams:', exams);
    }
  }
}
