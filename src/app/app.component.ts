import { Component, HostListener } from '@angular/core';
import { IScrollObj } from './animation-controller/animation-controller.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-animation-scroll';
  scrollPosition: IScrollObj;
  windowHeight: number = 0;
  constructor(){
    this.scrollPosition = {
      bottomDistance: null,
      topDistance: 0,
      maxScroll: null,
      percent: 0
    };
    this._calcWindowHeight();
  }
  @HostListener('window:resize', ['$event'])
  windowResize(){
    this._calcWindowHeight();
  }

  private _calcWindowHeight() {
    this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(this.windowHeight);
  }

  @HostListener('window:scroll', ['$event'])
  getDistFromBottom() {
      const currentScroll = this.getCurrentScroll();
      const maxScroll = this.getMaxScroll();
      let percent = ( currentScroll / Math.max( maxScroll, 1 ) );
      percent = Math.max( percent, 0 );
      percent = Math.min( percent, 1 );
      const results: IScrollObj = {
        bottomDistance: Math.max(maxScroll - currentScroll, 0),
        topDistance: currentScroll,
        maxScroll: maxScroll,
        percent: percent * 100
      };

      this.scrollChanged(results);
  }


  private getCurrentScroll(): number {
    return window.pageYOffset;
  }

  // I return the maximum scroll offset (in pixels) of the given DOM node.
  private getMaxScroll(): number {
    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.body.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    const clientHeight = document.documentElement.clientHeight;
    return( scrollHeight - clientHeight );
  }

  scrollChanged(event: IScrollObj) {
    if (!event) {
      return;
    }
    this.scrollPosition = event;
  }

}
