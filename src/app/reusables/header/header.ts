import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
active : boolean = false;
scrolled: any;
lastScrollY: any;


@HostListener('window:scroll', [])
onScroll() {
  const currentY = window.scrollY;
  this.scrolled = currentY;
  // if (this.dialog.openDialogs.length) return; // skip if dialog is open
  if (window.innerWidth <= 991) return; // skip animation on mobile
  // const scrollingDown = currentY > this.lastScrollY;
  // if (scrollingDown && currentY > 50) {
  //   this.hideTop = true;
  //   this.hideArr.emit(true);
  // }
  // else if (!scrollingDown && currentY < 15) {
  //   this.hideTop = false;
  //   this.hideArr.emit(false);
  // }
  this.lastScrollY = currentY;
}
}
