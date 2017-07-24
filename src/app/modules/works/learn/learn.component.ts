import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {Language, languagesSource} from './data';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  displayedColumns = ['name', 'designedBy', 'firstAppeared', 'goto'];
  dataSource: InitDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.dataSource = new InitDataSource(languagesSource);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      })
  }
}

export class InitDataSource extends DataSource<any> {
  _filterChanger = new BehaviorSubject('');

  get filter(): string {
    return this._filterChanger.value;
  }

  set filter(filter: string) {
    this._filterChanger.next(filter);
  }

  constructor(private _languageSource: Language[]) {
    super();
  }

  connect(): Observable<Language[]> {
    return Observable.merge(this._filterChanger).map(() => {
      return this._languageSource
        .slice()
        .sort((firstLanguage: Language, secondLanguage: Language) => {
          return firstLanguage.name.localeCompare(secondLanguage.name);
        })
        .filter((item: Language) => {
          const searchStr: string = (item.name + item.designedBy + item.firstAppeared).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        })
    })
  }

  disconnect() {

  }
}
