import { Component } from '@angular/core';
// import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-first-project000';
  // showLoadingIndicator = true;
  // constructor( 
  //   private _router: Router,
  // ) {
  //   this._router.events.subscribe((routerEvent: Event) => {
  //     if(routerEvent instanceof NavigationStart) {
  //       this.showLoadingIndicator = true;
  //     }

  //     if(routerEvent instanceof NavigationEnd) {
  //       this.showLoadingIndicator = false;
  //     }
  //   });
  // }
}
