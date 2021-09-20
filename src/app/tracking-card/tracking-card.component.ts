import { Component, OnInit, Input } from '@angular/core';

class TrackingCard {
  header: string = "";
  color: string = "";
  image: string = "";
  currentDailyHours: number = 0;
  previousDailyHours: number = 0;
  currentWeeklyHours: number = 0;
  previousWeeklyHours: number = 0;
  currentMonthlyHours: number = 0;
  previousMonthlyHours: number = 0;
}

@Component({
  selector: 'app-tracking-card',
  templateUrl: './tracking-card.component.html',
  styleUrls: ['./tracking-card.component.scss']
})
export class TrackingCardComponent implements OnInit {
  @Input() card: TrackingCard = new TrackingCard();
  @Input() timeMode: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
