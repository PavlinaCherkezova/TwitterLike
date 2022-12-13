import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, FormsModule, FontAwesomeModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
