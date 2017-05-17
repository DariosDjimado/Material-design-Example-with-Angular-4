import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	pageProgress:number=0;
  	showSeachBar:boolean=false;
  	popo:boolean=true;
  	languages={
  		currentValue:'En',
  		options:[
  		{name:'Deutsch',code:'Ds'},
  		{name:'English',code:'En'},
  		{name:'Español',code:'Es'},
  		{name:'Esperanto',code:'Eo'},
  		{name:'Français',code:'Fr'}		
  	]};
  	constructor(){}

	ngOnInit(){
		window.addEventListener('scroll',(e:any)=>{
			this.setProgressBarValue();
		})
	}

	setProgressBarValue(){
		let x=window.innerHeight;
		let y=document.documentElement.scrollTop || document.body.scrollTop;
		let z=document.body.scrollHeight;
		this.pageProgress=(x+y)*100/z;
	}
	changeLang(mdSelectChange){
		console.log(mdSelectChange.value);
		console.log(this.languages.currentValue)
	}

}
