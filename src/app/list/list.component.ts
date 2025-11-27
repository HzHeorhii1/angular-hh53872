import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items: string[] = [];
  newItem: string = '';

  addItem(): void {
    if (this.newItem.trim() !== '') {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
