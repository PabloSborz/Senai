import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PabloLink } from "./pablo-link/pablo-link";
import { MeConheca } from "./me-conheca/me-conheca";
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PabloLink, MeConheca, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pablo-sborz');
}
