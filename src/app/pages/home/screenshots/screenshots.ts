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

    this.swiper = new Swiper(".appSwiper", {
      effect: "coverflow",
      // autoplay: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 5,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 0,
        slideShadows: false,
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}
