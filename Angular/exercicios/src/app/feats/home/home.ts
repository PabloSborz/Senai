import { Component } from '@angular/core';
import type { ItHome } from './it-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  ap: ItHome = {
    o: 'home works!'
  };
}
