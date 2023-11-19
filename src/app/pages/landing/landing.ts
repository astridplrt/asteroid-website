import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class LandingPage implements AfterViewInit {
  pictures = [
    'https://ik.imagekit.io/ast/carantec%20logo%20mise%20en%20sc%C3%A8ne1.jpg?updatedAt=1699551705880',
    'https://ik.imagekit.io/ast/Outdoor%20Advertising%20Billboard%20Mockup%20PSD.jpg?updatedAt=1699718546074',
    'https://ik.imagekit.io/ast/logo%20m%C3%A9tal.jpg?updatedAt=1699551693444',
    'https://ik.imagekit.io/ast/old%20door%20in%20the%20forest.jpg?updatedAt=1699718532935',
    'https://ik.imagekit.io/ast/volage%20lingerie%20mockup.png?updatedAt=1699718566043',
    'https://ik.imagekit.io/ast/carantec%20logo%20mise%20en%20sc%C3%A8ne1.jpg?updatedAt=1699551705880'
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
