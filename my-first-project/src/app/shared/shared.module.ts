import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ControlErrorsComponent } from './control-errors/control-errors.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ControlErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    ControlErrorsComponent
  ]
})
export class SharedModule { }
