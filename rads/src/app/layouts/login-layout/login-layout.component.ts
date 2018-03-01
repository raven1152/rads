import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { UserConfigService } from '../../services/user-config/user-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  @ViewChild('selectLogin') public selectLogin: ElementRef;
  @ViewChild('userId') public userId: ElementRef;
  @ViewChild('password') public password: ElementRef;
  public logonError: boolean;

  constructor(public userService: UserConfigService, public route: ActivatedRoute, public router: Router) {
    this.logonError = false;
  }

  ngOnInit() {
  }

  public changed(event: any) {
    const val = this.selectLogin.nativeElement.options[this.selectLogin.nativeElement.selectedIndex].value;
    this.userId.nativeElement.value = val;
    this.password.nativeElement.value = val;
  }

  public logon(event: any) {
    const logonError = !this.userService.configUser(this.userId.nativeElement.value, this.password.nativeElement.value);
    if (!logonError && this.userService.user.isAuthenticated) {
      this.userService.defaultLayout = this.userService.userProfile.defaultLayout;
      this.userService.defaultRoute = this.userService.userProfile.defaultRoute;
      this.router.navigate([this.userService.defaultRoute]);
    }
  }
}
