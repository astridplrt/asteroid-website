import { Component, Input } from '@angular/core';

@Component({
  selector: 'prestations-card',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class prestationsCardComponent {
  @Input()
  titre!: string;

  @Input()
  prestas!: {name: string, text: string}[];
}
