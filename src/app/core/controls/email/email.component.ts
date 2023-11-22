import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'email',
  templateUrl: './email.component.html'
})
export class EmailComponent {
  @Input() label!:string;
  @Input() formGroup!:FormGroup;
  @Input() control: any;
  @Input() isSubmitted!:boolean;
}
