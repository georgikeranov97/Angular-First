import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.sass']
})
export class ControlErrorsComponent {
  @Input('control') control: FormControl;
  @Input('controlName') controlName: string;

  constructor() { }
}
