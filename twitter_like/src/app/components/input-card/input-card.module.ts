import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputCardComponent } from './input-card.component';

@NgModule({
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  declarations: [InputCardComponent],
  exports: [InputCardComponent]
})
export class InputCardModule { }
