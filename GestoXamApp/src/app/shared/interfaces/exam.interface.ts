export interface Exam {
  id: number;
  name: string;
  status: string;
  location: string | null;
  date: string;
  time: string;
}

export type CreateExam = Omit<Exam, 'id'>;