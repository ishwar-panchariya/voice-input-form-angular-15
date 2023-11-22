import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'password',
  templateUrl: './password.component.html'
})
export class PasswordComponent {
  @Input() label!:string;
  @Input() formGroup!:FormGroup;
  @Input() control: any;
  @Input() isSubmitted!:boolean;
}
