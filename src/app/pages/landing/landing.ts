import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingPage implements AfterViewInit {
  pictures = [
    'https://ik.imagekit.io/ast/Carantec/carantec%20logo%20mise%20en%20sc%C3%A8ne1.jpg',
    'https://ik.imagekit.io/ast/Impressions%20chinoises/Outdoor%20Advertising%20Billboard%20Mockup%20PSD.jpg',
    'https://ik.imagekit.io/ast/RLG/logo%20m%C3%A9tal.jpg',
    'https://ik.imagekit.io/ast/Illustration%20Old%20Door%20in%20the%20Forest/old_door_in_the_forest.jpg',
    'https://ik.imagekit.io/ast/Volage/volage%20lingerie%20mockup.png',
    'https://ik.imagekit.io/ast/Carantec/carantec%20logo%20mise%20en%20sc%C3%A8ne1.jpg'
  ];
  picture = 1;

  @ViewChild('slider')
  slider!: ElementRef<HTMLDivElement>;

  timer: number | null = null;

  ngAfterViewInit(): void {
    this.startTimer();
  }
  
  private startTimer() {
    // this.timer = setInterval(this.slideNext.bind(this), 3000);  // l'un ou l'autre, car perd le "this" de slideNext (this.slider)
    this.timer = window.setInterval(() => this.slideNext(), 3000);
  }

  private resetTimer() {
    if (this.timer != null) {
      window.clearInterval(this.timer);
      this.startTimer();
    }
  }
  
  slideNext() {
    this.resetTimer();
    const slider = this.slider.nativeElement;
    slider.style.transition = 'all ease-in-out 800ms';
    slider.style.transform = `translateX(calc(-100%/${this.pictures.length} * (${this.picture})))`;

    if (this.picture < 5) {
      this.picture++;
    } else {
      setTimeout(() => {
        slider.style.transition = 'none';
        this.picture = 1;
        slider.style.transform = `translateX(0)`;
      }, 900);
    }
  }
  
  slidePrevious() {
    this.resetTimer();
    const slider = this.slider.nativeElement;

    if (this.picture > 1) {
      this.picture--;
      slider.style.transition = 'all ease-in-out 800ms';
      slider.style.transform = `translateX(calc(-100%/${this.pictures.length} * (${this.picture} - 1)))`;
    } else {
      this.picture = 6;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(calc(-100%/${this.pictures.length} * (${this.picture} - 1)))`;
      this.picture--;
      setTimeout(() => {
        slider.style.transition = 'all ease-in-out 800ms';
        slider.style.transform = `translateX(calc(-100%/${this.pictures.length} * (${this.picture} - 1)))`;
      }, 50);
    }
  }
}
