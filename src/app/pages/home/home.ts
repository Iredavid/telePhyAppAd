import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ServiceGrid } from './service-grid/service-grid';
import { About } from './about/about';
import { WorkOfApp } from './work-of-app/work-of-app';
import { FeatureAd } from './feature-ad/feature-ad';
import { Testimonials } from './testimonials/testimonials';
import { Screenshots } from './screenshots/screenshots';

@Component({
  selector: 'app-home',
  imports: [Hero,ServiceGrid,About,WorkOfApp, FeatureAd, Testimonials, Screenshots],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
