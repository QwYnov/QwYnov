import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root',
})
export class QuizapiService {
  readonly apiUrl = 'https://quizapi.io/api/v1/questions';
  readonly key = '04XheGoJMTgiruEkRmJ2vhIek1fzsyCGK0UNC0kW';

  constructor(private http: HTTP) {}

  findQuestion(value) {
    if (value.theme === 'default') {
      return this.http
        .get(
          `${this.apiUrl}/?apiKey=${this.key}&difficulty=${value.difficulty}&limit=${value.question}`,
          {},
          {}
        )
    } else {
      return this.http
        .get(
          `${this.apiUrl}/?apiKey=${this.key}&category=${value.theme}&difficulty=${value.difficulty}&limit=${value.question}`,
          {},
          {}
        )
    }
  }
}
