import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SelectedYearService {
  private messageSource = new BehaviorSubject<string>("");
  selectedYear = this.messageSource.asObservable();
  constructor() {
  }

  changeMyVar(message: string) {
    this.messageSource.next(message);
  }
}
