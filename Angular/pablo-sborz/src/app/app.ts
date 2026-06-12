import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PabloLink } from "./pablo-link/pablo-link";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PabloLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pablo-sborz');
}
