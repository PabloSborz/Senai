import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly document = inject(DOCUMENT);
  readonly darkMode = signal(false);

  toggleTheme(): void {
    this.darkMode.update((isDark) => !isDark);
    this.document.documentElement.classList.toggle('dark-theme', this.darkMode());
  }
}
