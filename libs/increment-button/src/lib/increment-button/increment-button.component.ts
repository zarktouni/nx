import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from 'libs/shared-data/src/lib/counter-data/counter-data.service';   


@Component({
  selector: 'lib-increment-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.css',
})
export class IncrementButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  increment() {
    this.counterDataService.increment();
  }
}
