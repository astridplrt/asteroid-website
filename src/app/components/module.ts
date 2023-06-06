import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bracketButtonComponent } from './bracket-button';
import { prestationsCardComponent } from './prestations-card';
import { resumePrestationsCardComponent } from './resume-prestations-card';
import { workCardComponent } from './work-card';
import { threeDotsComponent } from './three-dots';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        bracketButtonComponent,
        prestationsCardComponent,
        resumePrestationsCardComponent,
        workCardComponent,
        threeDotsComponent
    ],
    exports: [
        bracketButtonComponent,
        prestationsCardComponent,
        resumePrestationsCardComponent,
        workCardComponent,
        threeDotsComponent
    ]
  })
  export class Components {}
