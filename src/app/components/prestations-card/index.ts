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
  presta1!: string;
  
  @Input()
  presta2!: string;
  
  @Input()
  presta3!: string;
  
  @Input()
  presta4!: string;
  
  @Input()
  presta5!: string;

  @Input()
  TLdisplay!: string; // top left display

  @Input()
  BRdisplay!: string; // bottom right display

  @Input()
  TRdisplay!: string; // top right display

  @Input()
  BLdisplay!: string; // bottom left display
}
