import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-card',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class workCardComponent {
  @Input()
  titre!: string;

  @Input()
  text!: string;

  @Input()
  imageLink!: string;
}
