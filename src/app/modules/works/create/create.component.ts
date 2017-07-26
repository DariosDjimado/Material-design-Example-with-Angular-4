import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdSnackBar} from '@angular/material';

import * as ace from 'brace';
import 'brace/ext/language_tools';

ace.acequire('ace/ext/language_tools');

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  theme = 'monokai';
  language = 0;
  htmlCode = `\n<!DOCTYPE html>\n<html lang="en">\n<head>\n	<meta charset="UTF-8">\n	<title>Awesome</title>\n    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">  \n</head>\n<body>\n	<header id="header">The Lion King</header>\n	<main>\n		<section>\n			<p>In the Pride Lands of Africa, a lion rules over the animal kingdom from Pride Rock. \n			King Mufasa's newborn son, Simba, is presented to the assembled animals by Rafiki,\n			a mandrill who serves as shaman and advisor</p>\n		</section>\n	</main>\n	<footer>© 2047 | The last Alien</footer>\n</body>\n</html>`;
  cssCode = `\n*{\n    box-sizing: border-box;\n}\nhtml,body{\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n    background: #3F51B5;\n}\nbody,header,main,footer{\n    display: flex;\n}\nbody{\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    font-family: 'Roboto', sans-serif;\n    color: #fff;\n    text-align: center;\n}\nheader,main,footer{\n    min-height: 4rem;\n    padding: 1.25rem;\n    justify-content: center;\n    align-items: center;\n    \n}\nheader{\n    background-color: #FF5722;\n}\nfooter{\n    background-color: #FF5722;\n}`;
  jsCode = `\nlet header=document.querySelector('#header');\n\nsetTimeout(()=>{\n\n    header.innerHTML='The last Alien';\n\n},2000)\r\n`;
  cppCode: string;
  pythonCode = '# tap def and tab\n';
  options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
  };


  @ViewChild('editor') editor: ElementRef;

  constructor(private snackBar: MdSnackBar) {}

  ngOnInit() {
    setTimeout(() => {
      this.snackBar.open('Happy coding !!!!', 'Thank', {
        duration: 2000
      })
    }, 1000)
  }

  onChangeTheme(theme: string) {
    this.theme = theme;
  }

  onChangeLanguage(index: number) {
    this.language = index;
  }

}
