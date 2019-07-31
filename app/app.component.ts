import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  isClicked: boolean = false;
  enterHit: boolean = false
  //When clicked will change the isClicked property to opposite of its current value
  changeTitle(){
    this.isClicked = !this.isClicked
    console.log(this.isClicked)
  }
  

  //FUnction to run when hit enter
  onEnter(){
    this.enterHit =!this.enterHit
  }

}
