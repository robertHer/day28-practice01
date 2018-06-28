import { Component } from '@angular/core';

import {Invention} from './invention.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nameInput:string;
  inventionInput:string;
  yearInput:number ;

  Inventions:Invention[]= [
    {name: 'rob' , invention: 'phone', year: 1980} 
  ];

  // constructor(){
  //   this.nameInput = '' ;
  //   this.inventionInput = '';
    

  // }
  



  ngOnInit(){
   console.log(this.Inventions);
  } 

  newInvention(){
    let newInvention: Invention = {
      name: this.nameInput , 
      invention: this.inventionInput , 
      year : this.yearInput
    };
    this.Inventions.push( newInvention ); 

    
    // this.nameInput = this.yearInput = this.inventionInput = ''; 
  }




  
}
