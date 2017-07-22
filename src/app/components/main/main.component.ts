import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ScreenService} from '../../services/screen.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  dynamicMode = 'side';
  sidenavOpened = false;

  onSmallScreenSubscription: Subscription;

  constructor(private screenService: ScreenService) {

  }

  ngOnInit() {
    this.onResize(this.screenService.onSmallScreenCurrent);
    this.onSmallScreenSubscription = this.screenService
      .onSmallScreen$
      .subscribe((onSmallScreen: boolean) => {
        this.onResize(onSmallScreen);
      })
  }

  ngOnDestroy() {
    this.onSmallScreenSubscription.unsubscribe();
  }

  onResize(smallScreen: boolean) {
    this.dynamicMode = smallScreen ? 'push' : 'side';
    this.sidenavOpened = !smallScreen;
  }

}
