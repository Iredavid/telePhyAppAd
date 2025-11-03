import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';


@Component({
  selector: 'app-screenshots',
  imports: [],
  templateUrl: './screenshots.html',
  styleUrl: './screenshots.scss',
})
export class Screenshots implements AfterViewInit {
  swiper!: Swiper

  ngAfterViewInit() {
    Swiper.use([Autoplay, EffectCoverflow, Navigation]);

    this.swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      spaceBetween: 20,
      centeredSlides: true,
      slidesPerView: 3,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        }
      },
      coverflowEffect: {
        stretch: 0,
        slideShadows: false,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true,
      observeParents: true,
    });
  }

}
