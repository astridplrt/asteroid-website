import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bracketButtonComponent } from './bracket-button';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        bracketButtonComponent
    ],
    exports: [
        bracketButtonComponent
    ]
  })
  export class Components {}
