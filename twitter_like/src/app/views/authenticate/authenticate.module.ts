import { NgModule } from '@angular/core';
import { AuthenticateComponent } from './authenticate.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ AuthenticateRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  declarations: [AuthenticateComponent],
  exports: [AuthenticateComponent]
})
export class AuthenticateModule { }
