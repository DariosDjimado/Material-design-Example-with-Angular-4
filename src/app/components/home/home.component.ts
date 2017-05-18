import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeScale:number;
	docu=false;

	tiles=[
		{header:'ANGULAR',img:'assets/img/angular.svg',footer:{company:'Google',tooltip:'', link:'#'}},
		{header:'HTML5',img:'assets/img/HTML5_sticker.svg',footer:{company:'W3C',tooltip:'World Wide Web Consortium', link:'#'}},
		{header:'NODE JS',img:'assets/img/nodejs-new-pantone-black.png',footer:{company:'Node.js',tooltip:'Node.js Foundation', link:'#'}},
		{header:'WEBPACK',img:'assets/img/webpack-icon.svg',footer:{company:'Webpack',tooltip:'Webpack module bundler', link:'#'}}

	];

  	constructor() { }

	ngOnInit() {
		window.addEventListener('scroll',(e:any)=>{
			let scrollPositionY=window.scrollY;

			if(scrollPositionY>250){
				this.homeScale=1.1;
			}
			if(scrollPositionY<250){
				this.homeScale=1;
			}
			
		})
	}
	show(){
		console.log(this.docu);
	}
}
