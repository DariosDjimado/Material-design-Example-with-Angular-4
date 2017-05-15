import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeScale:number;
  	constructor() { }

	ngOnInit() {
		window.addEventListener('scroll',(e:any)=>{
			let scrollPositionY=window.scrollY;

			if (scrollPositionY<400){
				this.homeScale=Math.max(scrollPositionY*0.9/300,1);
			}
			
		})
	}

}
