import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'text',
  templateUrl: './text.component.html'
})
export class TextComponent {
  @Input() label!:string;
  @Input() formGroup!:FormGroup;
  @Input() control: any;
  @Input() isSubmitted!:boolean;
  
}
