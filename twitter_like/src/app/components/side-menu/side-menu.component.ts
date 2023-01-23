import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public navigateHome(): void {
    this.router.navigate(['/home']);
  }

  public navigateProfile(): void {
    this.router.navigate(['/profile']);
  }

  public logOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/authenticate']);
  }
}
