import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeScale: number;

  tiles = [
    {
      header: 'MONGODB',
      img: 'assets/img/MongoDB_Gray_Logo_FullColor_RGB-01.jpg',
      footer: {company: 'MongoDB', tooltip: 'MongoDB, Inc', link: '#'}
    },
    {
      header: 'EXPRESSJS',
      img: 'assets/img/expressjs.png',
      footer: {company: 'Node.js', tooltip: 'Node.js Foundation', link: '#'}
    },
    {
      header: 'ANGULAR',
      img: 'assets/img/angular.svg',
      footer: {company: 'Google', tooltip: 'Google', link: '#'}
    },
    {
      header: 'NODE JS',
      img: 'assets/img/nodejs-new-pantone-black.png',
      footer: {company: 'Node.js', tooltip: 'Node.js Foundation', link: '#'}
    }
  ];

  constructor() {
  }

  ngOnInit() {
    window.addEventListener('scroll', (e: any) => {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY > 250) {
        this.homeScale = 1.1;
      }
      if (scrollPositionY < 250) {
        this.homeScale = 1;
      }

    })
  }
}
