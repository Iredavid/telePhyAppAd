import { Component, signal, } from '@angular/core';


@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials  {
  currentTestimonial = signal(0);
testimonials=[
  {
    text:'"With Continued Wash has been able to significantly As more and more people to multiply each day. Mobile app assists a lot in modern life really helpful"',
    name:'Honald Zein',
    role:'CEO',
    img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg'
  },
  {
    text:'"With Continued Wash has been able to significantly As more and more people to multiply each day. Mobile app assists a lot in modern life really helpful"',
    name:'Honald Zein',
    role:'CEO',
    img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg'
  },
  {
    text:'"With Continued Wash has been able to significantly As more and more people to multiply each day. Mobile app assists a lot in modern life really helpful"',
    name:'Honald Zein',
    role:'CEO',
    img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg'
  },
  {
    text:'"With Continued Wash has been able to significantly As more and more people to multiply each day. Mobile app assists a lot in modern life really helpful"',
    name:'Honald Zein',
    role:'CEO',
    img: 'https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg'
  },
]

goToTestimonial(inex: number) {
  this.currentTestimonial.set(inex);
  console.log(inex);
  
}

}
