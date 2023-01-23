import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticateService: AuthenticationService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }


  public onRegister(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      let credentials: UserCredentials = { username: this.loginForm.value.username, password: this.loginForm.value.password };
      this.authenticateService.register(credentials);
      this.loginForm.reset();
      this.router.navigate(['/home']);
    }
  }

  public onLogin(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      let credentials: UserCredentials = { username: this.loginForm.value.username, password: this.loginForm.value.password };
      
      if(this.authenticateService.login(credentials)){
        this.loginForm.reset();
        this.router.navigate(['/home']);
      }else{
        this.loginForm.reset();
        alert("Wrong username/password");
      }
    }
  }

}
