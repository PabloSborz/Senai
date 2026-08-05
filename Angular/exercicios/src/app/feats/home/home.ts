import { Component } from '@angular/core';
import type { ItHome } from './it-home';
import { ContadorFeat } from '../contador/contador';

@Component({
  selector: 'app-home',
  imports: [ContadorFeat],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  ap: ItHome = {
    o: 'home works!'
  };
}
