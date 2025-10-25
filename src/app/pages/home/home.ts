import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ServiceGrid } from './service-grid/service-grid';

@Component({
  selector: 'app-home',
  imports: [Hero,ServiceGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
