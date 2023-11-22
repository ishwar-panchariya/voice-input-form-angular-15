import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './controls/text/text.component';
import { EmailComponent } from './controls/email/email.component';
import { PasswordComponent } from './controls/password/password.component';


@NgModule({
  declarations: [
    CoreComponent,
    DynamicFormComponent,
    TextComponent,
    EmailComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
