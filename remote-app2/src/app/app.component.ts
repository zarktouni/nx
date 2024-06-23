import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {DecrementButtonComponent} from  'libs/decrement-button/src/lib/decrement-button/decrement-button.component';
import {IncrementButtonComponent} from  'libs/increment-button/src/lib/increment-button/increment-button.component';
import {ResetButtonComponent} from  'libs/reset-button/src/lib/reset-button/reset-button.component';
import { CounterDataService } from 'libs/shared-data/src/lib/counter-data/counter-data.service';
import { Observable } from 'rxjs';


@Component({
  standalone: true,
  imports: [CommonModule, DecrementButtonComponent, IncrementButtonComponent, ResetButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private counterDataService: CounterDataService) {
    this.count$ = this.counterDataService.currentCount;
  }
}
