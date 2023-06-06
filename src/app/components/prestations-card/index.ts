import { Component, Input } from '@angular/core';

@Component({
  selector: 'prestations-card',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class prestationsCardComponent {
  @Input()
  title!: string;

  @Input()
  prestas!: {name: string, text: string}[];
}
