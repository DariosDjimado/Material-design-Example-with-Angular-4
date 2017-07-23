import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ScreenService {
  // Observable source
  private onSmallScreenSource: Subject<boolean> = new Subject<false>();

  // Observable stream
  onSmallScreen$ = this.onSmallScreenSource.asObservable();

  // current value to use without resize event
  onSmallScreenCurrent;

  constructor() {
    this.init();
  }

  private init() {
    this.onSmallScreenSource.next(window.innerWidth < 750);
    this.onSmallScreenCurrent = window.innerWidth < 750;
    window.addEventListener('resize', () => {
      this.onSmallScreenSource.next(window.innerWidth < 750);
      this.onSmallScreenCurrent = window.innerWidth < 750;
    })
  }

}
