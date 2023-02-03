import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customButtonComponent } from './custom-button';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
        customButtonComponent
    ],
    exports: [
        customButtonComponent
    ]
  })
  export class Components {}
