import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contador',
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class ContadorFeat {
  count = 0;

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }
}
