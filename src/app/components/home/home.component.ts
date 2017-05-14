import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeImgOpacity:number=0.9;
	homeScale:number=2;
  	constructor() { }

	ngOnInit() {
		window.addEventListener('scroll',(e:any)=>{
			let scrollPositionY=window.scrollY;

			if (scrollPositionY<400){

				this.homeImgOpacity = Math.max(scrollPositionY*0.9/400,0.2);
				this.homeScale=2-scrollPositionY*0.9/400;
			}
			
		})
	}

}
