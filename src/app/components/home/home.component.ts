import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeScale:number;
	docu=false;
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
