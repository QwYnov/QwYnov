import { Question } from './../model/question.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  readonly apiUrl = 'https://quizapi.io/api/v1/questions';
  readonly key = '04XheGoJMTgiruEkRmJ2vhIek1fzsyCGK0UNC0kW';

  constructor(private http: HttpClient) { }

  findQuestion(): Observable<Question> {
    return this.http.get<Question>(`https://quizapi.io/api/v1/questions/?apiKey=04XheGoJMTgiruEkRmJ2vhIek1fzsyCGK0UNC0kW`);
  }
}
