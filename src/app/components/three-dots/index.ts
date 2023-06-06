import { Component, Input } from '@angular/core';

@Component({
  selector: 'three-dots',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class threeDotsComponent {
  @Input()
  color!: string;
}
