import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bracketButtonComponent } from './bracket-button';
import { prestationsCardComponent } from './prestations-card';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        bracketButtonComponent,
        prestationsCardComponent
    ],
    exports: [
        bracketButtonComponent,
        prestationsCardComponent
    ]
  })
  export class Components {}
