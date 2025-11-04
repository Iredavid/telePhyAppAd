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
      centeredSlides: false,
      slidesPerView: 1,
      centerInsufficientSlides: true,
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
          width: 350,
          loop: true,
          centerInsufficientSlides: true,


        },
        785: {
          slidesPerView: 2,
          spaceBetween: 0,
          centeredSlides: true,
          centerInsufficientSlides: true,

        },
        991: {
          slidesPerView: 3,
          spaceBetween: 0,
          centeredSlides: true,
          centerInsufficientSlides: true,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 0,
          centeredSlides: true,
          centerInsufficientSlides: true,

        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          centerInsufficientSlides: true,
        },
      },
      coverflowEffect: {

        rotate: 30,
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
      observeSlideChildren: true,
      updateOnWindowResize: true,
    });
  }

}
