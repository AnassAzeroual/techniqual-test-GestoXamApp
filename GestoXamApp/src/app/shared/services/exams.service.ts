
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../interfaces/exam.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  baseUrl = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) { }

  getExams() {
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/api/exams`);
  }

  getExamById(id: string) {
    return this.httpClient.get<Exam>(`${this.baseUrl}/api/exams/${id}`);
  }

  createExam(exam: Exam) {
    return this.httpClient.post(`${this.baseUrl}/api/exams`, exam);
  }

  updateExam(id: string, exam: Exam) {
    return this.httpClient.put(`${this.baseUrl}/api/exams/${id}`, exam);
  }

  deleteExam(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/api/exams/${id}`);
  }

  searchExams(query: string) {
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/api/exams/search?query=${query}`);
  }

  filterExamsByDate(startDate: string, endDate: string) {
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/api/exams/filter?startDate=${startDate}&endDate=${endDate}`);
  }

  sortExamsByDate(order: 'asc' | 'desc') {
    return this.httpClient.get<Exam[]>(`${this.baseUrl}/api/exams/sort?order=${order}`);
  }
}
