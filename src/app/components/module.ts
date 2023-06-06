import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bracketButtonComponent } from './bracket-button';
import { prestationsCardComponent } from './prestations-card';
import { resumePrestationsCardComponent } from './resume-prestations-card';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        bracketButtonComponent,
        prestationsCardComponent,
        resumePrestationsCardComponent
    ],
    exports: [
        bracketButtonComponent,
        prestationsCardComponent,
        resumePrestationsCardComponent
    ]
  })
  export class Components {}
