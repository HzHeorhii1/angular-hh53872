import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  imports: [CommonModule],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  @Input() max: number = 100;
  currentNumber: number | null = null;
  comment: string = '';
  commentColor: string = '';

  constructor(private randomService: RandomService) {}

  generateRandom(): void {
    this.currentNumber = this.randomService.getRandomNumber(this.max);
    const threshold = 0.5 * this.max;
    
    if (this.currentNumber <= threshold) {
      this.comment = 'Liczba jest mniejsza lub równa połowie maksimum';
      this.commentColor = 'green';
    } else {
      this.comment = 'Liczba jest większa od połowy maksimum';
      this.commentColor = 'red';
    }
  }
}
