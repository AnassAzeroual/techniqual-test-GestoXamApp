
import { Component, OnInit } from '@angular/core';
import { ExamsService } from '../../shared/services/exams.service';
import { Exam } from '../../shared/interfaces/exam.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class ExamsComponent implements OnInit {
  examsData: Exam[] = [];

  constructor(private readonly srvExams: ExamsService) { }

  ngOnInit() {
    this.srvExams.getExams().subscribe(
      (data: Exam[]) => {
        this.examsData = data;
      }
    );
  }
}
