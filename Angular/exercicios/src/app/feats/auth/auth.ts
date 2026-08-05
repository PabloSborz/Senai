import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-auth',
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  isLogged = false;

  toggle(): void {
    this.isLogged = !this.isLogged;
  }
}
