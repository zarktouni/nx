import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterDataService} from 'libs/shared-data/src/lib/counter-data/counter-data.service';   

@Component({
  selector: 'lib-reset-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.css',
})
export class ResetButtonComponent {
  constructor (private counterDataService : CounterDataService){}

  reset() {
    this.counterDataService.reset();
  }
}
