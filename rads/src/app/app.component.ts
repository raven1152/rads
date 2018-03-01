import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserConfigService } from './services/user-config/user-config.service';
import { ApplicationConfigService } from './services/application-config/application-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../themes/bootstrap.scss',
    '../themes/dark.scss',
    '../themes/material.scss'
  ]
})
export class AppComponent {
  public layouts: string[];

  public constructor(public route: ActivatedRoute, public router: Router, public userConfig: UserConfigService, public applicationConfig: ApplicationConfigService) {
    this.layouts = applicationConfig.layouts;
    if (userConfig.defaultLayout === this.layouts[1]) {
      this.requestFullScreen();
    }
    this.navigateDefaultRoute();
  }

  public navigateDefaultRoute() {
    this.router.navigate([this.userConfig.defaultRoute]);
  }

  public requestFullScreen() {
    // const el = document.documentElement
    // const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
    // if (typeof rfs !== 'undefined' && rfs) {
    //   rfs.call(el);
    // } else if (typeof window.ActiveXObject !== 'undefined') {
    //   const wscript = new ActiveXObject('WScript.Shell');
    //   if (wscript != null) {
    //     wscript.SendKeys('{F11}');
    //   }
    // }
  }
}
