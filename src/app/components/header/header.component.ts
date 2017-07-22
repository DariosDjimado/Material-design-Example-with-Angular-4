import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScreenService} from '../../services/screen.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  onSmallScreen;
  onSmallScreenSubscription: Subscription;

  constructor(private screenService: ScreenService) {
  }

  ngOnInit() {
    this.onSmallScreen = this.screenService.onSmallScreenCurrent;
    this.onSmallScreenSubscription = this.screenService.onSmallScreen$
      .subscribe(onSmallScreen => {
        this.onSmallScreen = onSmallScreen;
      })

  }

  ngOnDestroy() {
    this.onSmallScreenSubscription.unsubscribe();
  }


  /* setProgressBarValue() {
     const x = window.innerHeight;
     const y = document.documentElement.scrollTop || document.body.scrollTop;
     const z = document.body.scrollHeight;
     this.pageProgress = (x + y) * 100 / z;
   }

   changeLang(mdSelectChange) {
     console.log(mdSelectChange.value);
   }*/
}
