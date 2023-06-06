import { Component, Input } from '@angular/core';

@Component({
  selector: 'work-card',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class workCardComponent {
  @Input()
  title!: string;

  @Input()
  text!: string;
}
