import { Component } from '@angular/core';
import data from './data.json';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking-dashboard';
  breakpoint: number = 0;
  cards: TrackingCard[] = [];
  timeMode: string = "daily";

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 768) ? 1 : 4;
    for (let elem of data) {
      let card: TrackingCard = new TrackingCard();
      card.header = elem.title;
      card.color = elem.color;
      card.image = elem.image;
      card.currentDailyHours = elem.timeframes.daily.current;
      card.previousDailyHours = elem.timeframes.daily.previous;
      card.currentWeeklyHours = elem.timeframes.weekly.current;
      card.previousWeeklyHours = elem.timeframes.weekly.previous
      card.currentMonthlyHours = elem.timeframes.monthly.current;
      card.previousMonthlyHours = elem.timeframes.monthly.previous;
      this.cards.push(card)
    }
    console.log(this.cards);
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 768) ? 1 : 4;
  }

  setTimeMode(event: any) {
    this.timeMode = event;
  }
}
