import { Injectable } from '@angular/core';
import { OptionService } from './option.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  get timerRunning(): boolean {
    return this._timerRunning;
  }

  private _currentSecondsLeft = this.optionService.timerDuration;
  private _timerRunning = false;

  timerValue: Subject<number> = new Subject<number>();
  timerDone: Subject<void> = new Subject<void>();
  timerInterval?: number;

  constructor(private optionService: OptionService) {
    this.timerValue.next(optionService.timerDuration);
  }

  startTimer() {
    this._timerRunning = true;
    this.timerInterval = window.setInterval(() => {
      this._currentSecondsLeft--;
      this.timerValue.next(this._currentSecondsLeft);
      if (this._currentSecondsLeft === 0) {
        this.pauseTimer();
        this.timerDone.next();
      }
    }, 1000);
  }

  pauseTimer() {
    window.clearInterval(this.timerInterval);
    this._timerRunning = false;
  }

  resetTimer() {
    this.pauseTimer();
    this._currentSecondsLeft = this.optionService.timerDuration;
    this.timerValue.next(this.optionService.timerDuration);
  }
}
