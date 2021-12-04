import { Component ,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corseProject';

  constructor( public myElement: ElementRef ) { 
    
     this.myElement.nativeElement.ownerDocument.body.style.backgroundColor='rgba(70, 130, 180, 0.3)';
  }
}
