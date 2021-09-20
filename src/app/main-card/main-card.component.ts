import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  @Output() timeModeEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setDailyMode(event: any) {
    document.querySelectorAll(".daily-button")[0].classList.add("selected-mode");
    document.querySelectorAll(".weekly-button")[0].classList.remove("selected-mode");
    document.querySelectorAll(".monthly-button")[0].classList.remove("selected-mode");
    this.timeModeEvent.emit("daily");
  }

  setWeeklyMode(event: any) {
    document.querySelectorAll(".daily-button")[0].classList.remove("selected-mode");
    document.querySelectorAll(".weekly-button")[0].classList.add("selected-mode");
    document.querySelectorAll(".monthly-button")[0].classList.remove("selected-mode");
    this.timeModeEvent.emit("weekly");
  }

  setMonthlyMode(event: any) {
    document.querySelectorAll(".daily-button")[0].classList.remove("selected-mode");
    document.querySelectorAll(".weekly-button")[0].classList.remove("selected-mode");
    document.querySelectorAll(".monthly-button")[0].classList.add("selected-mode");
    this.timeModeEvent.emit("monthly");
  }
}
